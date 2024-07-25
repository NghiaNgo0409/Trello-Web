import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove, defaultAnimateLayoutChanges } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'
import { cloneDeep } from 'lodash'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_CARD'
}

function BoardContent({ board }) {
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: { active: { opacity: '0.5' } }
    })
  }
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 }
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 }
  })
  const sensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumns, setOrderedColumns] = useState([])

  const [activeDragItemID, setActiveDragItemID] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  //Hàm tìm column của card bằng cardID
  const findColumnByCardID = (cardID) =>
    orderedColumns.find((column) =>
      column?.cards.map((card) => card._id)?.includes(cardID)
    )

  const handleDragStart = (event) => {
    setActiveDragItemID(event?.active?.id)
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    )
    setActiveDragItemData(event?.active?.data?.current)
  }

  const handleDragOver = (event) => {
    // Nếu kéo column thì không cần tương tác logic trong này vì không có function column over others
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

    const { active, over } = event

    // Không tồn tại vật thể kéo và vật thể được over thì return (tránh crash trang)
    if (!active || !over) return

    const {
      id: activeDragCardID,
      data: { current: activeDragCardData }
    } = active
    const { id: overDragCardID } = over

    // Xác định column của thẻ được kéo và thẻ được thả
    const activeColumn = findColumnByCardID(activeDragCardID)
    const overColumn = findColumnByCardID(overDragCardID)

    if (!activeColumn || !overColumn) return

    if (activeColumn._id != overColumn._id) {
      setOrderedColumns((prevColumns) => {
        //Tìm vị trí của thẻ được thả trong overColumn
        const overCardIndex = overColumn?.cards.findIndex(
          (card) => card._id === overDragCardID
        )

        let newCardIndex
        // Thuật toán của thư viện để xác định index mới của thẻ active
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height

        const modifier = isBelowOverItem ? 1 : 0

        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.cards?.length + 1

        const nextColumns = cloneDeep(prevColumns)

        const nextActiveColumn = nextColumns.find(
          (column) => column._id === activeColumn._id
        )
        const nextOverColumn = nextColumns.find(
          (column) => column._id === overColumn._id
        )

        if (nextActiveColumn) {
          // Loại bỏ thẻ được kéo ra khỏi cột cũ của nó
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDragCardID
          )
          // Cập nhật lại cardOrderIds của cột
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          )
        }

        if (nextOverColumn) {
          // Loại bỏ thẻ được kéo có thể đã được thêm vào trước đó
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDragCardID
          )
          // Thêm thẻ được kéo vào cột mới (over column)
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDragCardData
          )
          // Cập nhật lại cardOrderIds của cột
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          )
        }
        return nextColumns
      })
    }
  }

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (!active || !over) return

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const {
        id: activeDragCardID,
        data: { current: activeDragCardData }
      } = active
      const { id: overDragCardID } = over

      // Xác định column của thẻ được kéo và thẻ được thả
      const activeColumn = findColumnByCardID(activeDragItemID)
      const overColumn = findColumnByCardID(overDragCardID)

      if (!activeColumn || !overColumn) return

      if (activeColumn != overColumn._id) {
        return
      } else {
        const oldCardIndex = overColumn?.cards.findIndex(
          (c) => c._id === activeDragItemID
        )
        const newCardIndex = overColumn?.findIndex(
          (c) => c._id === overDragCardID
        )
        const dndOrderedCards = arrayMove(
          overColumn?.cards,
          oldCardIndex,
          newCardIndex
        )
        setOrderedColumns((prevColumns) => {
          prevColumns.cards = dndOrderedCards
          prevColumns.cardOrderIds = prevColumns.dndOrderedCards
        })
      }
    }

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      if (active.id !== over.id) {
        const oldColumnIndex = orderedColumns.findIndex(
          (c) => c._id === active.id
        )
        const newColumnIndex = orderedColumns.findIndex(
          (c) => c._id === over.id
        )
        const dndOrderedColumns = arrayMove(
          orderedColumns,
          oldColumnIndex,
          newColumnIndex
        )
        setOrderedColumns(dndOrderedColumns)
      }
    }

    setActiveDragItemID(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Box
        sx={{
          p: '10px 0',
          height: (theme) => theme.trello.boardContentHeight,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
        }}
      >
        <ListColumns columns={orderedColumns} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
            <Column column={activeDragItemData} />
          )}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
            <Card card={activeDragItemData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent

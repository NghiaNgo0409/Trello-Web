import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext } from '@dnd-kit/core'
import { useEffect, useState } from 'react'

function BoardContent({ board }) {
  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id !== over.id) {
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box
        sx={{
          p: '10px 0',
          height: (theme) => theme.trello.boardContentHeight,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
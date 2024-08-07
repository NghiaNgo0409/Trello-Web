import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext } from '@dnd-kit/core'

function BoardContent({ board }) {
  return (
    <DndContext>
      <Box
        sx={{
          p: '10px 0',
          height: (theme) => theme.trello.boardContentHeight,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
        }}
      >
        <ListColumns
          columns={mapOrder(board?.columns, board?.columnOrderIds, '_id')}
        />
      </Box>
    </DndContext>
  )
}

export default BoardContent

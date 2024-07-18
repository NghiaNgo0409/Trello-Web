import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

function BoardContent({ board }) {
  console.log(board?.columns)
  return (
    <Box
      sx={{
        p: '10px 0',
        height: (theme) => theme.trello.boardContentHeight,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
      }}
    >
      <ListColumns columns={mapOrder(board?.columns, board?.)} />
    </Box>
  )
}

export default BoardContent

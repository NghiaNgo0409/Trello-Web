import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

function BoardContent({ board }) {
  return (
    <Box
      sx={{
        p: '10px 0',
        height: (theme) => theme.trello.boardContentHeight,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
      }}
    >
      <ListColumns columns={board?.columns} />
    </Box>
  )
}

export default BoardContent

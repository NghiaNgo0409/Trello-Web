import Box from '@mui/material/Box'

const HEADER_HEIGHT = '50px'
const FOOTER_HEIGHT = '56px'

function BoardContent() {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.boardContentHeight,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        display: 'flex',
        alignItems: 'flex-start'
      }}
    >
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: '6px'
        }}
      >
        <Box
          sx={{
            height: HEADER_HEIGHT,
            p: 2
          }}
        >
          Header
        </Box>
        <Box>List Cards</Box>
        <Box>Footer</Box>
      </Box>
    </Box>
  )
}

export default BoardContent

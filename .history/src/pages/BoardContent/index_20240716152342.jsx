import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box
      sx={{
        height: (theme) =>
          `calc(
    100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight}
  )`,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        display: 'flex',
        // alignItems: 'flex-start'
        height: 'fit-content'
      }}
    >
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: '6px',
          p: 2
        }}
      >
        <Box>Header</Box>
        <Box>List Cards</Box>
        <Box>Footer</Box>
      </Box>
    </Box>
  )
}

export default BoardContent

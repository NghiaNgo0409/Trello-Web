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
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px'
        }}
      ></Box>
    </Box>
  )
}

export default BoardContent

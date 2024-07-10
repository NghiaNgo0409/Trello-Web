import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box
      sx={{
        height: (theme) =>
          `calc(
    100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight}
  )`,
        backgroundColor: 'primary.light',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Board Content
    </Box>
  )
}

export default BoardContent

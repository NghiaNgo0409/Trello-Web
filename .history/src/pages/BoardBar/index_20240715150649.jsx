import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.trello.boardBarHeight,
        backgroundColor: 'primary.dark',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto'
      }}
    >
      Board Bar
    </Box>
  )
}

export default BoardBar

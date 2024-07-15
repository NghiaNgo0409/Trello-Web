import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderTop: 1px solid #00bfa5
      }}
    >
      Board Bar
    </Box>
  )
}

export default BoardBar

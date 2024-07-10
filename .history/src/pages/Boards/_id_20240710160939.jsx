import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar></AppBar>
      <Box
        sx={{
          height: (theme) => theme.trello.boardBarHeight,
          backgroundColor: 'primary.dark',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Board Bar
      </Box>
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
    </Container>
  )
}

export default Board

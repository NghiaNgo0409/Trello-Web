import React from 'react'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box
        sx={{
          height: (theme) => theme.trello.appBarHeight,
          backgroundColor: 'primary.main',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ModeSelect />
      </Box>
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

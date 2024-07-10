function AppBar() {
  return (
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
  )
}

export default AppBar

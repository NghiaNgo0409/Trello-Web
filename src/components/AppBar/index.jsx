import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
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

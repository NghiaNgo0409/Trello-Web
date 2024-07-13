import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
function AppBar() {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <AppsIcon></AppsIcon>
      <ModeSelect />
    </Box>
  )
}

export default AppBar

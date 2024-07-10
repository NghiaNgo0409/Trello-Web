import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

import { pink } from '@mui/material/colors'
import { useColorScheme } from '@mui/material/styles'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

function App() {
  return (
    <>
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
    </>
  )
}

export default App

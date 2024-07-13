import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspace from './Menus/Workspace'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import Profile from './Menus/Profile'

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: 'primary.main'
          }}
        >
          <SvgIcon component={TrelloIcon} inheritViewBox />
          <Typography
            variant="span"
            sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}
          >
            Trello
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Workspace />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">CREATE</Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          size="small"
        />

        <ModeSelect />
        <Tooltip title="Notifications" arrow>
          <Badge sx={{ cursor: 'pointer' }} color="secondary" variant="dot">
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>

        <Tooltip title="Help" arrow sx={{ cursor: 'pointer' }}>
          <HelpOutlineIcon />
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar

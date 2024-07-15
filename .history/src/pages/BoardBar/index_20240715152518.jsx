import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

const MENU_STYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  paddingX: '5px',
  border: 'none',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

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
        borderTop: '1px solid #00bfa5'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="NghiaNgo MERN Stack Board"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Private/Public Workspaces"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AvatarGroup max={7}>
          <Tooltip title="Help" arrow sx={{ cursor: 'pointer' }}>
            <HelpOutlineIcon />
          </Tooltip>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww"
          />
          <Avatar
            alt="Travis Howard"
            src="https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.unsplash.com/photo-1706885093476-b1e54f3b7496?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://plus.unsplash.com/premium_photo-1670002383626-10c63bbe67d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.unsplash.com/photo-1645830166230-187caf791b90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar

import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'

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
        <Chip icon={<DashboardIcon />} label="NghiaNgo D" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}></Box>
    </Box>
  )
}

export default BoardBar

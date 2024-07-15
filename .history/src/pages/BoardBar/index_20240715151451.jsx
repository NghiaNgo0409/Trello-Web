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
        <Chip
          sx={{
            color: 'primary.main',
            bgcolor: 'white',
            paddingX: '5px',
            '& .'
            '&:hover': {
              bgcolor: 'primary.50'
            }
          }}
          icon={<DashboardIcon />}
          label="NghiaNgo MERN Stack Board"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}></Box>
    </Box>
  )
}

export default BoardBar

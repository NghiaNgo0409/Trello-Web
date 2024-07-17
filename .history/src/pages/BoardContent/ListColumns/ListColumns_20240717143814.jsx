import Box from '@mui/material/Box'
import Column from './Column/Column'

function ListColumns() {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}
    >
      {/* Box column */}
      <Column />
      <Column />
    </Box>
  )
}

export default ListColumns

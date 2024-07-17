import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'

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

      {/* Add new column */}
      <Box
        sx={{
          color: 'white'
        }}
      >
        <Button>Add new column</Button>
      </Box>
    </Box>
  )
}

export default ListColumns

import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

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
          display: 'flex',
          justifyContent: 'flex-start'
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2
        }}
      >
        <Button
          startIcon=<NoteAddIcon />
          sx={{
            color: 'white',
            width: '100%'
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns

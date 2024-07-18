import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

function ListColumns({ columns }) {
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
      {columns.map((column) => (
        <Column column={columns?.column} />
      ))}
      <Column />
      <Column />
      {/* Add new column */}
      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          bgcolor: '#ffffff3d',
          borderRadius: '6px'
        }}
      >
        <Button
          startIcon=<NoteAddIcon />
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns

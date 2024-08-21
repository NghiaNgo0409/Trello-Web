import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import {
  horizontalListSortingStrategy,
  SortableContext
} from '@dnd-kit/sortable'
import { useState } from 'react'

function ListColumns({ columns }) {
  const [openCreateColumn, setOpenCreateColumn] = useState(false)
  const toggleCreateColumn = () => {
    setOpenCreateColumn(!openCreateColumn)
  }
  return (
    <SortableContext
      items={columns?.map((column) => column._id)}
      strategy={horizontalListSortingStrategy}
    >
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
          <Column key={column?._id} column={column} />
        ))}
        {/* Add new column */}
        {!openCreateColumn ? (
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
        ) : (
          <Box
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              p: 1,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d',
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            tao column
          </Box>
        )}
      </Box>
    </SortableContext>
  )
}

export default ListColumns

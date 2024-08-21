import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

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
  const [newColumnTitle, setNewColumnTitle] = useState('')
  const addNewColumn = () => {
    if (!newColumnTitle) {
      return
    }
    console.log(newColumnTitle)
    toggleCreateColumn(!openCreateColumn)
    setNewColumnTitle('')
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
            onClick={toggleCreateColumn}
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
            <TextField
              label="Enter column title...."
              type="text"
              size="small"
              variant="outlined"
              autoFocus
              // value={newColumnTitle}
              onChange={(e) => setNewColumnTitle(e.target.value)}
              sx={{
                '& label': {
                  color: 'white'
                },
                '& input': {
                  color: 'white'
                },
                '& label.Mui-focused': {
                  color: 'white'
                },
                '.MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white'
                  },
                  '&:hover fieldset': {
                    borderColor: 'white'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white'
                  }
                }
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                onClick={addNewColumn}
                variant="contained"
                color="success"
                size="small"
                sx={{
                  boxShadow: 'none',
                  border: '0.5px solid',
                  borderColor: (theme) => theme.palette.success.main,
                  '&:hover': { bgcolor: (theme) => theme.palette.success.main }
                }}
              >
                Add Column
              </Button>
              <CloseIcon
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': { color: (theme) => theme.palette.warning.light }
                }}
                onClick={toggleCreateColumn}
              />
            </Box>
          </Box>
        )}
      </Box>
    </SortableContext>
  )
}

export default ListColumns

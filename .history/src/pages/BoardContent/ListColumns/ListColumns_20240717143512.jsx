import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import PeopleIcon from '@mui/icons-material/People'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const HEADER_HEIGHT = '50px'
const FOOTER_HEIGHT = '56px'

function ListColumns() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
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
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: '6px',
          maxHeight: (theme) =>
            `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
        }}
      >
        {/* Box header */}

        <Box
          sx={{
            height: HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6" fontSize="1rem" fontWeight="bold">
            Column List
          </Typography>
          <Tooltip title="More option" arrow>
            <ExpandMoreIcon
              sx={{ cursor: 'pointer', color: 'primary.main' }}
              id="basic-button-column-dropdown"
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
        {/* Box list card */}

        <Box
          sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight}
      - ${theme.spacing(5)}
      - ${HEADER_HEIGHT}
      - ${FOOTER_HEIGHT}
      )`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}
        >
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1720986073460-d34ea04ac7bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"
              title="green iguana"
            />
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Lizard</Typography>
            </CardContent>
            <CardActions sx={{ p: '0 4px 8px 4px' }}>
              <Button size="small" startIcon=<PeopleIcon />>
                20
              </Button>
              <Button size="small" startIcon=<CommentIcon />>
                15
              </Button>
              <Button size="small" startIcon=<AttachmentIcon />>
                10
              </Button>
            </CardActions>
          </Card>

          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
        </Box>
        {/* Box footer */}

        <Box
          sx={{
            height: FOOTER_HEIGHT,
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Button startIcon=<AddCardIcon />>Add new card</Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon sx={{ cursor: 'pointer' }} />
          </Tooltip>
        </Box>
      </Box>
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: '6px',
          maxHeight: (theme) =>
            `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
        }}
      >
        {/* Box header */}

        <Box
          sx={{
            height: HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6" fontSize="1rem" fontWeight="bold">
            Column List
          </Typography>
          <Tooltip title="More option" arrow>
            <ExpandMoreIcon
              sx={{ cursor: 'pointer', color: 'primary.main' }}
              id="basic-button-column-dropdown"
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
        {/* Box list card */}

        <Box
          sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight}
      - ${theme.spacing(5)}
      - ${HEADER_HEIGHT}
      - ${FOOTER_HEIGHT}
      )`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}
        >
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1720986073460-d34ea04ac7bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"
              title="green iguana"
            />
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Lizard</Typography>
            </CardContent>
            <CardActions sx={{ p: '0 4px 8px 4px' }}>
              <Button size="small" startIcon=<PeopleIcon />>
                20
              </Button>
              <Button size="small" startIcon=<CommentIcon />>
                15
              </Button>
              <Button size="small" startIcon=<AttachmentIcon />>
                10
              </Button>
            </CardActions>
          </Card>

          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': {
                  p: 1.5
                }
              }}
            >
              <Typography>Test</Typography>
            </CardContent>
          </Card>
        </Box>
        {/* Box footer */}

        <Box
          sx={{
            height: FOOTER_HEIGHT,
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Button startIcon=<AddCardIcon />>Add new card</Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon sx={{ cursor: 'pointer' }} />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default ListColumns

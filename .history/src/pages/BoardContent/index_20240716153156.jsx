import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const HEADER_HEIGHT = '50px'
const FOOTER_HEIGHT = '56px'

function BoardContent() {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.boardContentHeight,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        display: 'flex',
        alignItems: 'flex-start'
      }}
    >
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: '6px'
        }}
      >
        <Box
          sx={{
            height: HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6" fontSize="1rem">
            Column List
          </Typography>
          <Button
            sx={{ color: 'white' }}
            id="basic-button-workspace"
            aria-controls={open ? 'basic-menu-workspace' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon=<ExpandMoreIcon />
          >
            Workspaces
          </Button>
          <Menu
            id="basic-menu-workspace"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button-workspace'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘C
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘V
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Web Clipboard</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
        <Box>List Cards</Box>
        <Box
          sx={{
            height: HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          Footer
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent

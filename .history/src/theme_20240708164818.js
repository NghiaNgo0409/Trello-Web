import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {},
    dark: {}
  }
  // ...other properties
})

export default theme

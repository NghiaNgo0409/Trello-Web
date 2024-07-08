import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { deepOrange, red } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: 
      }
    }
  }
  // ...other properties
})

export default theme

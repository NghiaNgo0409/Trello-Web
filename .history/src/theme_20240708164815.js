import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {},
    dark: {
      palette: {
        primary: {
          main: '#000'
        }
      }
    }
  }
  // ...other properties
})

export default theme

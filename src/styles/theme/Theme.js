import { createTheme } from '@material-ui/core'
import { blue, teal } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      light: blue[500],
      main: blue[600],
      dark: blue[700],
      contrastText: '#fff',
    },

    secondary: {
      light: teal[200],
      main: teal[300],
      dark: teal[400],
      contrastText: '#fff',
    },
  },

  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',

    button:{
      textTransform: 'none',
    },

    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
})

export default theme

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

  breakpoints: {
    values: {
      xs: 0,
      sm: 480, //default: 600
      md: 768, //default: 960
      lg: 1024, //default: 1280
      xl: 1280, //default: 1920
    },
  },

  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',

    button: {
      textTransform: 'none',
    },

    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },

    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },

    h3: {
      fontSize: '1.8rem',
      fontWeight: 700,
    },

    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },

    h5: {
      fontSize: '1.2rem',
      fontWeight: 700,
    },

    h6: {
      fontSize: '1.1rem',
      fontWeight: 700,
    },
  },
})

export default theme

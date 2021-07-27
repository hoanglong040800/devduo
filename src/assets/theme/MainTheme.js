import { createTheme, ThemeProvider } from '@material-ui/core'
import { deepPurple, orange } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      light: deepPurple[400],
      main: deepPurple[500],
      dark: deepPurple[600],
    },

    secondary: {
      light: orange[300],
      main: orange[400],
      dark: orange[500],
    },
  },

  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
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

export default function MainTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

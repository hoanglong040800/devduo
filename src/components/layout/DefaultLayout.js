import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import NavBar from 'components/modules/navbar/NavBar'

export default function DefaultLayout({ children }) {
  const classes = useStyles()

  return (
    <>
      <NavBar />

      <Container className={classes.container}>{children}</Container>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1280,
    },
  },
}))

import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Navbar from 'common/components/navbar/Navbar'

export default function DefaultLayout({ children }) {
  const classes = useStyle()

  return (
    <>
      <Navbar />

      <div className={classes.main}>
        <Container maxWidth="xl" className={classes.container}>
          <Box mt={5} mb={10}>
            {children}
          </Box>
        </Container>
      </div>
    </>
  )
}

const useStyle = makeStyles(() => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },

  container: {
    flexGrow: 1,
  },
}))

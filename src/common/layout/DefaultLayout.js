import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import MainNavDrawer from 'common/components/drawer/MainNavDrawer'
import Navbar from 'common/components/navbar/Navbar'
import { useState } from 'react'

export default function DefaultLayout({ children }) {
  const classes = useStyle()
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Navbar onOpenDrawer={() => setOpenDrawer(true)} />

      <MainNavDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />

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
    minHeight: '90vh',
  },

  container: {
    flexGrow: 1,
  },
}))

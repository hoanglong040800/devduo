import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { makeStyles, Box, AppBar, Toolbar, Container } from '@material-ui/core'
import NavLinks from './NavLinks'
import AuthGroupButton from './AuthGroupButton'
import ProfileMenu from './ProfileMenu'

export default function NavBar() {
  const classes = useStyles()
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
      <AppBar position="static" style={{background: '#f8f8f8'}}>
        <Container>
          <Toolbar>
            <Link href="/">
              <a>
                <Image
                  src="/devduo.svg"
                  alt="logo-devduo"
                  height="40"
                  width="40"
                />
              </a>
            </Link>

            <Box className={classes.nav}>
              <NavLinks />

              {isLogin ? <ProfileMenu /> : <AuthGroupButton />}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

    </>
  )
}

const useStyles = makeStyles({
  nav: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

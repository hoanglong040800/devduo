import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, AppBar, Toolbar, Container } from '@material-ui/core'
import classes from './styles/NavBar.module.css'
import NavLinks from './NavLinks'
import AuthGroupButton from './AuthGroupButton'
import ProfileMenu from './ProfileMenu'

export default function NavBar() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <AppBar position="sticky" elevation={2} style={{ background: '#f8f8f8' }}>
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

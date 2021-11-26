import { Box, AppBar, Toolbar, Container, IconButton } from '@material-ui/core'
import NavLinks from './NavLinks'
import AuthGroupButton from './AuthGroupButton'
import ProfileMenu from './ProfileMenu'
import { useSession } from 'next-auth/client'
import UserInfo from './UserInfo'
import { Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import NavLogo from './NavLogo'

export default function NavBar({ onOpenDrawer }) {
  const mui = useStyles()
  const [session, loading] = useSession()

  return (
    <>
      <AppBar position="sticky" elevation={2} style={{ background: '#f8f8f8' }}>
        <Container maxWidth="xl">
          <Toolbar>
            <div className={mui.nav}>
              <IconButton className={mui.hamburger} onClick={onOpenDrawer}>
                <Menu color="primary" />
              </IconButton>

              <div className={mui.logoandlink}>
                <NavLogo />

                <NavLinks />
              </div>

              {
                //
                session ? (
                  <Box display="flex" alignItems="center">
                    <UserInfo />

                    <ProfileMenu />
                  </Box>
                ) : (
                  <AuthGroupButton />
                )
              }
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  nav: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  hamburger: {
    display: 'block',

    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  logoandlink: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
}))

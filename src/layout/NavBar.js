import Image from 'next/image'
import Link from 'next/link'
import { makeStyles, Box, AppBar, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  link: {
    margin: '0 0 0 20px',
    fontWeight: 700,
  },

  nav: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
})

export default function NavBar() {
  const classes = useStyles()

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Link href="/">
          <a>
            <Image src="/devduo.svg" alt="logo-devduo" width="40" height="40" />
          </a>
        </Link>

        <Box display="flex" className={classes.nav}>
          <Box display="flex" aria-label="nav-link">
            <Link href="/mentor">
              <a>
                <Typography color="primary" className={classes.link}>
                  Find Mentor
                </Typography>
              </a>
            </Link>

            <Link href="/about">
              <a>
                <Typography color="primary" className={classes.link}>
                  About
                </Typography>
              </a>
            </Link>
          </Box>

          <Box aria-label="login">
            <Link href="/">
              <a>
                <Typography>Login</Typography>
              </a>
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

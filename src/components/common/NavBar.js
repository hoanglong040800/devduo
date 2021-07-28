import Image from 'next/image'
import Link from 'next/link'
import {
  makeStyles,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Container,
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

const useStyles = makeStyles({
  link: {
    margin: '0 0 0 20px',
    fontWeight: 700,
  },

  nav: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftBtn: {
    marginRight: 20,
  },
})

export default function NavBar() {
  const classes = useStyles()

  return (
    <AppBar position="static" color="default">
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

            <Box aria-label="account">
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.leftBtn}
              >
                Sign Up
              </Button>

              <Button variant="outlined" color="secondary" size="small">
                Log In
              </Button>
            </Box>
          </Box>
      </Toolbar>
        </Container>
    </AppBar>
  )
}

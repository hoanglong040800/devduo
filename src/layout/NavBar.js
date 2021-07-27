import Image from 'next/image'
import Link from 'next/link'
import { AppBar, Toolbar, Typography, makeStyles, Box } from '@material-ui/core'

export default function NavBar() {
  const classes = useStyles()

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Link href="/">
          <a>
            <Image src="/devduo.png" alt="logo-devduo" width="50" height="50" />
          </a>
        </Link>

        <Box display="flex" alignItems="center" ml={3}>
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
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles({
  link: {
    margin: '0 0 0 20px',
    fontWeight: 700,
    ':hover':{
      textDecoration: 'underline',
    },
  },
})

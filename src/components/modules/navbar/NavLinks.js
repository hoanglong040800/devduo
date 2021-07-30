import Link from 'next/link'
import { Box, Typography, makeStyles } from '@material-ui/core'

export default function NavLinks() {
  const classes = useStyles()

  return (
    <Box display="flex">
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
  )
}

const useStyles = makeStyles({
  link: {
    margin: '0 0 0 20px',
    fontWeight: 700,
  },
})

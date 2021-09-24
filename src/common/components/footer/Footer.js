import { makeStyles, Typography } from '@material-ui/core'

export default function Footer() {
  const classes = useStyle()

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
    </footer>
  )
}

const useStyle = makeStyles(theme => ({
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    padding: '3.25rem 1.5rem',
  },
}))

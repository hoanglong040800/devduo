import { Box, Button, makeStyles } from '@material-ui/core'

export default function AuthGroupButton() {
  const classes = useStyles()

  return (
    <Box>
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
  )
}

const useStyles = makeStyles({
  leftBtn: {
    marginRight: 20,
  },
})

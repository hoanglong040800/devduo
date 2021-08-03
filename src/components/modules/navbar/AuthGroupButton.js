import { Box, Button, makeStyles } from '@material-ui/core'
import AuthForm from 'components/modules/auth/AuthForm'
import { useDispatch } from 'react-redux'
import { openLoginForm, openSignupForm } from 'store/authFormSlice'

export default function AuthGroupButton() {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <>
      <Box>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.leftBtn}
          onClick={() => dispatch(openSignupForm())}
        >
          Sign Up
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => dispatch(openLoginForm())}
        >
          Log In
        </Button>
      </Box>

      <AuthForm />
    </>
  )
}

const useStyles = makeStyles({
  leftBtn: {
    marginRight: 20,
  },
})

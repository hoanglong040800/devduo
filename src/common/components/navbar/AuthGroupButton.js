import { Box, Button, makeStyles } from '@material-ui/core'
import AuthForm from 'modules/auth/AuthForm'
import { useDispatch } from 'react-redux'
import { openLoginForm, openSignupForm } from 'common/store/authFormSlice'

export default function AuthGroupButton() {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <>
      <Box>
          <Button
            variant="contained"
            color="primary"
            className={classes.leftBtn}
            onClick={() => dispatch(openSignupForm())}
          >
            Signup
          </Button>

        <Button
          color="default"
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

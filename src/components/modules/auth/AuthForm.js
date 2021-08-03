import { Box, Button, makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeAuthForm,
  openLoginForm,
  openSignupForm,
} from 'store/authFormSlice'
import CenterModal from 'components/common/modal/DefaultModal'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export default function AuthForm() {
  const { open, isLogin } = useSelector(state => state.authForm)
  const dispatch = useDispatch()
  const classes = useStyles()

  return (
    <CenterModal open={open} onClose={() => dispatch(closeAuthForm())}>
      <div className={classes.root}>
        <Box display="flex" justifyContent="center" mb={3}>
          <Button
            variant={isLogin ? 'outlined' : 'contained'}
            color={isLogin ? 'default' : 'primary'}
            size="large"
            onClick={() => dispatch(openSignupForm())}
          >
            Signup
          </Button>

          <Button
            variant={isLogin ? 'contained' : 'outlined'}
            color={isLogin ? 'primary' : 'default'}
            size="large"
            onClick={() => dispatch(openLoginForm())}
          >
            Login
          </Button>
        </Box>

        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </CenterModal>
  )
}

const useStyles = makeStyles({
  root: {
    padding: '35px 40px',
    width: '350px',
  },
})

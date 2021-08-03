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
        <Box display="flex" justifyContent="center">
          <Button
            variant={isLogin ? 'outlined' : 'contained'}
            color={isLogin ? 'default' : 'primary'}
            onClick={() => dispatch(openSignupForm())}
          >
            Signup
          </Button>

          <Button
            variant={isLogin ? 'contained' : 'outlined'}
            color={isLogin ? 'primary' : 'default'}
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
    padding: '20px',
  },
})

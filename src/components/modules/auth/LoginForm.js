import { useState } from 'react'
import {
  Button,
  TextField,
  Box,
  FormControl,
  Snackbar,
  Slide,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export default function LoginForm() {
  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  function changeHandler(e) {
    const name = e.target.name
    const value = e.target.value
    setInput({ ...input, [name]: value })
  }

  // Fogot Password
  const [openSnackbar, setOpenSnackbar] = useState(false)

  function closeSnackbarHandler(e, reason) {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnackbar(false)
  }

  function forgotHandler() {
    setOpenSnackbar(true)
  }

  return (
    <>
      <form noValidate>
        <FormControl margin="dense" fullWidth>
          <TextField
            label="Email"
            name="email"
            value={input.email}
            onChange={changeHandler}
          />
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <TextField
            label="Password"
            name="password"
            value={input.password}
            onChange={changeHandler}
          />
        </FormControl>

        <Box textAlign="right" mt={2}>
          <Button color="primary" onClick={forgotHandler}>
            Forgot your password?
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </form>

      <Snackbar
        open={openSnackbar}
        onClose={closeSnackbarHandler}
        autoHideDuration={2500}
        TransitionComponent={Slide}
      >
        <Alert onClose={closeSnackbarHandler} severity="success">
          Your password have been reset! Check your email
        </Alert>
      </Snackbar>
    </>
  )
}

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
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import TextFieldController from 'components/common/TextFieldController'
import { schema } from 'utils/validation-schema'

export default function LoginForm() {
  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  function onSubmit() {
    alert(watch('email'))
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
      <form>
        <TextFieldController
          name="email"
          label="Email"
          control={control}
          errors={errors}
        />

        <TextFieldController
          name="pswd"
          label="Password"
          control={control}
          errors={errors}
        />

        <Box textAlign="right" mt={2}>
          <Button color="primary" onClick={forgotHandler}>
            Forgot your password?
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
          >
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

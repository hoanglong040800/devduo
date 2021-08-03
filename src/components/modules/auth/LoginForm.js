import {
  Button,
  TextField,
  Box,
  FormControl,
  Typography,
} from '@material-ui/core'

export default function LoginForm() {
  return (
    <>
      <form noValidate>
        <FormControl margin="dense" fullWidth>
          <TextField label="Email" name="email" />
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <TextField label="Password" name="password" />
        </FormControl>

        <Box textAlign="right" mt={2}>
          <a href="">
            <Typography color="primary">Forgot your password?</Typography>
          </a>
        </Box>

        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </form>
    </>
  )
}

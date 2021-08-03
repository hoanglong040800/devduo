import { Button, TextField, Box, FormControl } from '@material-ui/core'

export default function SignupForm() {
  return (
    <>
      <form noValidate>
        <FormControl margin="dense" fullWidth>
          <TextField label="Email" name="email" />
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <TextField label="Password" name="password" />
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <TextField label="Confirm Password" name="confirmPassword" />
        </FormControl>

        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" color="primary">
            Signup
          </Button>
        </Box>
      </form>
    </>
  )
}

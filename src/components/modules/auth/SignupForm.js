import { Button, TextField, Box, FormControl } from '@material-ui/core'
import { useState } from 'react'

export default function SignupForm() {
  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  function changeHandler(e) {
    const name = e.target.name
    const value = e.target.value
    setInput({ ...input, [name]: value })
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

        <FormControl margin="dense" fullWidth>
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={changeHandler}
          />
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

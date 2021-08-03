import { useState } from 'react'
import { Button, TextField, Box, FormControl, Typography } from '@material-ui/core'

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
          <a href="">
            <Typography color="primary">Forgot your password?</Typography>
          </a>
        </Box>

        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" color="primary">
            Signup
          </Button>
        </Box>
      </form>
    </>
  )
}

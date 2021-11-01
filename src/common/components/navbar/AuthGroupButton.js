import { Box, Button } from '@material-ui/core'
import { signIn } from 'next-auth/client'

export default function AuthGroupButton() {
  return (
    <>
      <Box>
        <Button
          color="primary"
          variant="contained"
          onClick={() => signIn('google')}
        >
          Login
        </Button>
      </Box>
    </>
  )
}

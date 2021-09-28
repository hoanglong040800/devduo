import { Box, Button } from '@material-ui/core'
import { url } from 'common/utils/constants'
import { signIn } from 'next-auth/client'

export default function AuthGroupButton() {
  return (
    <>
      <Box>
        <Button
          color="primary"
          variant="contained"
          onClick={() =>
            signIn('google', {
              callbackUrl: url.afterLogin,
            })
          }
        >
          Login
        </Button>
      </Box>
    </>
  )
}

import { Box, Button } from '@material-ui/core'

export default function HomePage() {
  return (
    <Box m={5}>
      <Button variant="contained" color="primary">
        Primary
      </Button>

      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </Box>
  )
}

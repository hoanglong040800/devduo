import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'

export default function SideInfo({ details }) {
  const mui = useStyles()
  const [status, setStatus] = useState('')
  const [isBooked, setIsBooked] = useState(false)

  useEffect(() => {
    setIsBooked(status === 'pending' || status === 'ongoing' ? true : false)
  }, [status])

  function handleBook() {
    setStatus('pending')
  }

  function handleCancel() {
    setStatus('cancel')
  }

  return (
    <>
      <Paper elevation={2} className={mui.paper}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Typography variant="h1" align="center" color="secondary">
            {details.price}
          </Typography>

          <Typography variant="h6" color="secondary">
            $/h
          </Typography>
        </Box>

        {isBooked ? (
          <Box mb={2}>
            <Typography variant="h6" align="center">
              Status: {status}
            </Typography>
          </Box>
        ) : null}

        <Box display="flex" justifyContent="center">
          {
            //
            isBooked ? (
              <Button
                style={{ background: '#ff6b52', color: '#fff' }}
                variant="contained"
                fullWidth
                onClick={handleCancel}
              >
                <Typography variant="h6">Cancel</Typography>
              </Button>
            ) : (
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={handleBook}
              >
                <Typography variant="h6">Book</Typography>
              </Button>
            )
          }
        </Box>
      </Paper>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: [theme.spacing(3, 3)],
  },
}))

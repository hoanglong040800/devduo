import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function SideInfo({
  details,
  bookingStatus,
  onClickBook,
  onCancel,
}) {
  const mui = useStyles()
  const router = useRouter()
  const [session, loading] = useSession()
  const [isBooked, setIsBooked] = useState(false)
  const [isMyProfile, setIsMyProfile] = useState(false)

  useEffect(() => {
    setIsBooked(bookingStatus === 'ongoing' ? true : false)

    setIsMyProfile(
      session ? (session.user.id === details.id ? true : false) : false
    )
  }, [bookingStatus, session, details.id])

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

        <Box mb={2}>
          {
            //
            isBooked ? (
              <Typography variant="h6" align="center" gutterBottom>
                Booking Status:{' '}
                <span style={{ color: '#f0de16' }}>{bookingStatus}</span>
              </Typography>
            ) : details.status ? null : (
              <Typography align="center" gutterBottom>
                Mentor is offline or already booked
              </Typography>
            )
          }
        </Box>

        <Box display="flex" justifyContent="center">
          {
            //
            isMyProfile ? (
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={() => router.push('/user/edit-profile')}
              >
                <Typography variant="h6">Edit Profile</Typography>
              </Button>
            ) : isBooked ? (
              <div>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={() => router.push('/user/booking/mentor')}
                  style={{ marginBottom: 10 }}
                >
                  <Typography variant="h6">View booking</Typography>
                </Button>

                <Button
                  style={{ background: '#ff6b52', color: '#fff' }}
                  variant="contained"
                  fullWidth
                  onClick={onCancel}
                >
                  <Typography variant="h6">Cancel</Typography>
                </Button>
              </div>
            ) : (
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={onClickBook}
                disabled={!details.status}
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

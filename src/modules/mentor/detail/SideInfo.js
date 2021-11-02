import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core'
import { useSession, signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function SideInfo({ details, status, onClickBook, onCancel }) {
  const mui = useStyles()
  const router = useRouter()
  const [session, loading] = useSession()
  const [isBooked, setIsBooked] = useState(false)
  const [isMyProfile, setIsMyProfile] = useState(false)

  useEffect(() => {
    setIsBooked(status === 'pending' || status === 'ongoing' ? true : false)

    setIsMyProfile(
      session ? (session.user.id === details.user_id ? true : false) : false
    )
  }, [status, session, details])

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

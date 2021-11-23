import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ContactDetail from './ContactDetail'

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

  const priceComponent = (
    <Box display="flex" justifyContent="center" mb={2}>
      <Typography variant="h1" align="center" color="secondary">
        {details.price}
      </Typography>

      <Typography variant="h6" color="secondary">
        $/h
      </Typography>
    </Box>
  )

  const isOfflineComponent = (
    <Box mb={1}>
      <Typography align="center" gutterBottom>
        Mentor is offline or already booked
      </Typography>
    </Box>
  )

  const isMyProfileComponent = (
    <>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => router.push('/user/edit-profile')}
      >
        <Typography variant="h6">Edit Profile</Typography>
      </Button>
    </>
  )

  const isBookedComponent = (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        Booking Status:{' '}
        <span style={{ color: '#f0de16' }}>{bookingStatus}</span>
      </Typography>

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
    </>
  )

  const isNotBookedComponent = (
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

  const moreContactsComponent = (
    <Paper className={mui.paper}>
      <Typography variant="h5" gutterBottom>
        More Contacts
      </Typography>

      <ContactDetail contacts={details.contacts} type="private" />
    </Paper>
  )

  return (
    <>
      <Paper className={mui.paper}>
        {priceComponent}

        {!isMyProfile && !details.status && !isBooked && isOfflineComponent}

        <Box display="flex" flexDirection="column" alignItems="center">
          {isMyProfile
            ? isMyProfileComponent
            : isBooked
            ? isBookedComponent
            : isNotBookedComponent}
        </Box>
      </Paper>

      {isMyProfile && moreContactsComponent}

      {isBooked && moreContactsComponent}
    </>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 3),
    margin: theme.spacing(0, 0, 3, 0),
    boxShadows: theme.shadows[2],
  },
}))

import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Link from 'next/link'

export default function MentorBookingItem({ item }) {
  const mui = useStyles()
  const statusColor = {
    ongoing: '#f0de16',
    finish: '#5dff52',
    cancel: '#fc8c58',
  }

  return (
    <div className={mui.paper}>
      <Box display="flex">
        <div className={mui.imgContainer}>
          <img
            src={
              item.mentor.thumnail ||
              'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
            }
            alt={item.mentor.full_name}
          />
        </div>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Link href={`/mentors/${item.mentor.id}`}>
            <a className={mui.fullname}>{item.mentor.full_name}</a>
          </Link>

          <div>
            <Typography variant="body2">Duration: {item.duration}h</Typography>

            <Typography variant="body2">
              Total price: {item.total_price}$
            </Typography>

            <Typography variant="body2">10:10 1/11/2021</Typography>
          </div>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" style={{ color: statusColor[item.status] }}>
          {item.status}
        </Typography>

        <Button
          color="primary"
          size="small"
          disabled={item.status !== 'ongoing'}
        >
          Cancel
        </Button>
      </Box>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    height: 120,
    display: 'flex',
    justifyContent: 'space-between',
    margin: [theme.spacing(2, 0)],
    padding: [theme.spacing(2, 2)],
    background: '#fff',
    borderRadius: 10,
    boxShadow: [theme.shadows[1]],

    [theme.breakpoints.down('xs')]: {
      height: 160,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },

  col: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  imgContainer: {
    height: '100%',
    width: 90,
    marginRight: [theme.spacing(2)],

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: [theme.shape.borderRadius],
    },
  },

  fullname: {
    fontSize: '1.1rem',
    fontWeight: 700,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

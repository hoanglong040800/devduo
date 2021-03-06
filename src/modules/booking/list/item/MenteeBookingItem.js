import { Box, Button, IconButton, Typography } from '@material-ui/core'
import { FiberManualRecord, RateReview } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { statusColor } from 'common/utils/constants'
import { convertTimeStart } from 'common/utils/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function MenteeBookingItem({ item, onCancel, onFinish }) {
  const mui = useStyles()
  const router = useRouter()
  const { formatStartDatetime, formatCountdownTime } = convertTimeStart(
    item.time_start,
    item.duration
  )

  useEffect(() => {
    item.status === 'ongoing' && formatCountdownTime === '' && onFinish(item.id)
  }, [])

  return (
    <div className={mui.paper}>
      <Box display="flex">
        <div className={mui.imgContainer}>
          <img
            src={
              item.mentee.image ||
              'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
            }
            alt={item.mentee.user_name}
          />
        </div>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Link href={`/mentors/${item.mentee.id}`}>
            <a className={mui.fullname}>{item.mentee.user_name}</a>
          </Link>

          <div>
            <Typography variant="body2">Duration: {item.duration}h</Typography>

            <Typography variant="body2">
              Total price: {item.total_price}$
            </Typography>

            <Typography variant="body2">{formatStartDatetime}</Typography>
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

        {item.status === 'ongoing' && <p>{formatCountdownTime}</p>}

        {item.status === 'finish' && item.is_rating && (
          <IconButton
            size="small"
            onClick={() => router.push(`/mentors/${item.mentor.id}`)}
          >
            <RateReview
              fontSize="small"
              style={{ color: statusColor.finish }}
            />
          </IconButton>
        )}

        {
          //
          item.status === 'ongoing' && (
            <Button
              color="primary"
              size="small"
              disabled={item.status !== 'ongoing'}
              onClick={() => onCancel(item.id)}
            >
              Cancel
            </Button>
          )
        }
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

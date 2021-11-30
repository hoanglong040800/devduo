import { Box, Button, IconButton, Typography } from '@material-ui/core'
import { AddComment, FiberManualRecord } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import Link from 'next/link'
import { convertTimeStart } from 'common/utils/utils'
import { statusColor } from 'common/utils/constants'
import ActiveStatusDot from 'modules/mentor/status/ActiveStatusDot'
import { useEffect } from 'react'

export default function MentorBookingItem({
  item,
  onCancel,
  onFinish,
  onOpenRatingModal,
}) {
  const mui = useStyles()
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
              item.mentor.thumbnail ||
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
          <Box display="flex">
            <Link href={`/mentors/${item.mentor.id}`}>
              <a className={mui.fullname}>{item.mentor.full_name}</a>
            </Link>

            <ActiveStatusDot status={item.mentor.status} />
          </Box>

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

        {item.status === 'finish' && (
          <IconButton
            size="small"
            onClick={() => onOpenRatingModal(item)}
            disabled={item.is_rating}
          >
            <AddComment
              fontSize="small"
              style={{ color: item.is_rating ? statusColor.finish : 'gray' }}
            />
          </IconButton>
        )}

        {item.status === 'ongoing' && <p>{formatCountdownTime}</p>}

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
      height: 'auto',
      minHeight: 150,
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

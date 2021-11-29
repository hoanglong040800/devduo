import { Box, Typography } from '@material-ui/core'
import { Star } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

export default function RatingItem({ item }) {
  const mui = useStyles()

  return (
    <div className={mui.root}>
      <div className={mui.imgContainer}>
        <img
          src={item.booking.mentee.image}
          alt={item.booking.mentee.user_name}
        />
      </div>

      <Box display="flex" flex={1} justifyContent="space-between">
        <div>
          <Typography variant="h6">{item.booking.mentee.user_name}</Typography>
          <p>{item.comment}</p>
        </div>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          minWidth={100}
        >
          <div>
            {
              //
              [...Array(item.rating)].map(i => (
                <Star fontSize="small" style={{ color: '#f2eb0a' }} />
              ))
            }
          </div>

          <p>
            ({item.booking.duration}
            {item.booking.duration > 1 ? ' hours' : ' hour'})
          </p>
        </Box>
      </Box>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    borderBottom: '1px solid lightgray',
    padding: theme.spacing(2, 0),
    margin: theme.spacing(3, 0),
  },

  imgContainer: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(2),

    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 100,
      border: '1px solid lightgray',
    },
  },
}))

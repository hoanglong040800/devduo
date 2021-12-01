import { Box, IconButton, Typography } from '@material-ui/core'
import { DeleteOutline, Star } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { formatPluralTime } from 'common/utils/utils'
import { useSession } from 'next-auth/client'

export default function RatingItem({ item, onDelete }) {
  const mui = useStyles()
  const [session] = useSession()

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

          <p>({formatPluralTime(item.booking.duration, 'hour')})</p>

          {session
            ? session.user.id === item.booking.mentee.id && (
                <IconButton size="small" onClick={() => onDelete(item.id)}>
                  <DeleteOutline
                    fontSize="small"
                    style={{ color: '#ff6347' }}
                  />
                </IconButton>
              )
            : null}
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

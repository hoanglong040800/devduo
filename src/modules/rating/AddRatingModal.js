import {
  Box,
  Button,
  Fade,
  makeStyles,
  MenuItem,
  Modal,
  Paper,
  Typography,
} from '@material-ui/core'
import SelectController from 'common/components/input/SelectController'
import TextAreaController from 'common/components/input/TextAreaController'
import { convertTimeStart, formatPluralTime } from 'common/utils/utils'
import { useForm } from 'react-hook-form'

export default function AddRatingModal({
  booking = null,
  open,
  onClose,
  onAddRating,
}) {
  const mui = useStyles()
  const {
    watch,
    reset,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues: { rating: 5 } })

  function onCancel() {
    onClose()
    reset()
  }

  function onSubmit(data) {
    onAddRating(data)
    reset()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Fade in={open}>
        {
          //
          booking && (
            <Paper className={mui.paper}>
              <Box display="flex">
                <div className={mui.imgContainer}>
                  <img
                    src={booking.mentor.thumbnail}
                    alt={booking.mentor.full_name}
                  />
                </div>

                <Box display="flex" flex={1} justifyContent="space-between">
                  <div>
                    <Typography variant="h6" gutterBottom>
                      {booking.mentor.full_name}
                    </Typography>

                    <Typography variant="body2">
                      {
                        convertTimeStart(booking.time_start, booking.duration)
                          .formatStartDatetime
                      }
                    </Typography>
                  </div>

                  <Typography>
                    ({formatPluralTime(booking.duration, 'hour')})
                  </Typography>
                </Box>
              </Box>

              <SelectController
                name="rating"
                label="Rating"
                control={control}
                errors={errors}
              >
                <MenuItem value={5}>⭐⭐⭐⭐⭐</MenuItem>
                <MenuItem value={4}>⭐⭐⭐⭐</MenuItem>
                <MenuItem value={3}>⭐⭐⭐</MenuItem>
                <MenuItem value={2}>⭐⭐</MenuItem>
                <MenuItem value={1}>⭐</MenuItem>
              </SelectController>

              <TextAreaController
                name="comment"
                label="Comment"
                control={control}
                errors={errors}
              />

              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button color="default" onClick={onCancel} className={mui.btn}>
                  Cancel
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                >
                  Rating & Comment
                </Button>
              </Box>
            </Paper>
          )
        }
      </Fade>
    </Modal>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: 350,
    padding: theme.spacing(3, 3),
    boxShadow: theme.shadows[3],
  },

  imgContainer: {
    width: 40,
    height: 40,
    marginRight: theme.spacing(2),

    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 100,
      border: '1px solid lightgray',
    },
  },

  btn: {
    margin: theme.spacing(0, 2, 0, 0),
  },
}))

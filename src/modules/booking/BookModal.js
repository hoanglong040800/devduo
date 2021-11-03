import {
  Box,
  Button,
  Divider,
  Fade,
  makeStyles,
  MenuItem,
  Modal,
  Paper,
  Typography,
} from '@material-ui/core'
import SelectController from 'common/components/input/SelectController'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function BookModal({
  open,
  onClose,
  onBook,
  details,
  money = 200,
}) {
  const mui = useStyles()
  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: { duration: 1 },
  })

  useEffect(() => {
    setValue('total_price', details.price * watch('duration'))
  }, [watch('duration'), details.price])

  function onError(error) {
    console.log('ERROR', error)
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Fade in={open}>
        <Paper className={mui.paper}>
          <Typography variant="h4" gutterBottom>
            Booking Mentor
          </Typography>

          <Divider />

          <Box mb={2}>
            <SelectController
              name="duration"
              label="Duration"
              control={control}
              errors={errors}
            >
              <MenuItem value={1}>1 hour</MenuItem>
              <MenuItem value={2}>2 hours</MenuItem>
              <MenuItem value={3}>3 hours</MenuItem>
              <MenuItem value={4}>4 hours</MenuItem>
              <MenuItem value={5}>5 hours</MenuItem>
              <MenuItem value={6}>6 hours</MenuItem>
              <MenuItem value={7}>7 hours</MenuItem>
              <MenuItem value={8}>8 hours</MenuItem>
            </SelectController>

            <Box
              display="flex"
              justifyContent="space-between"
              maxWidth={150}
              mt={1}
            >
              <Typography>Price</Typography>

              <Typography variant="h6">{details.price}$/h</Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              maxWidth={150}
              mt={0.5}
            >
              <Typography>Total price</Typography>

              <Typography variant="h6">{watch('total_price')}$</Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              maxWidth={150}
              mt={0.5}
            >
              <Typography>Your money</Typography>

              <Typography variant="h6">{money}$</Typography>
            </Box>
          </Box>

          <Divider />

          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button color="default" onClick={onClose} className={mui.btn}>
              Cancel
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onBook, onError)}
              disabled={money < watch('total_price')}
            >
              Book
            </Button>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: 350,
    padding: [theme.spacing(3, 3)],
    boxShadow: [theme.shadows[3]],
  },

  btn: {
    margin: [theme.spacing(0, 2, 0, 0)],
  },
}))

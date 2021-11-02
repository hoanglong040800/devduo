import {
  Box,
  Button,
  Divider,
  Fade,
  makeStyles,
  Modal,
  Paper,
} from '@material-ui/core'

export default function BookModal({ open, onClose, onBook }) {
  const mui = useStyles()

  return (
    <Modal open={open} onClose={onClose}>
      <Fade in={open}>
        <Paper className={mui.paper}>
          <h3>Confirm Booking</h3>

          <Divider />

          <p>Do you want to book?</p>

          <Box display="flex" justifyContent="flex-end" mt={3}>
            <Button color="default" onClick={onClose} className={mui.btn}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={onBook}>
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
    maxWidth: 500,
    padding: [theme.spacing(3, 3)],
    boxShadow: [theme.shadows[3]],
  },

  btn: {
    margin: [theme.spacing(0, 2, 0, 0)],
  },
}))

import { makeStyles, Modal, Backdrop, Fade, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export default function CenterModal({ children, open, onClose, position }) {
  const classes = useStyles()

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={onClose}
      BackdropComponent={Backdrop}
      closeAfterTransition
    >
      <Fade in={true}>
        <Paper elevation={10}>{children}</Paper>
      </Fade>
    </Modal>
  )
}

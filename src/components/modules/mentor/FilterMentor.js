import { Paper, TextField } from '@material-ui/core'
import classes from 'styles/mentor/FIlterMentor.module.css'

export default function FIlterMentor() {
  return (
    <Paper className={classes.paper}>
      <TextField label="Search name" variant="filled" />
    </Paper>
  )
}

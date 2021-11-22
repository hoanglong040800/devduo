import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import BodyDetail from './BodyDetail'
import HeaderDetail from './HeaderDetail'

export default function MainInfo({ details }) {
  const mui = useStyles()

  return (
    <Paper className={mui.paper}>
      <HeaderDetail details={details} />

      <BodyDetail details={details} />
    </Paper>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    boxShadow: theme.shadows[0],
  },
}))

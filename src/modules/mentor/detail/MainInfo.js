import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import BodyDetail from './BodyDetail'
import HeaderDetail from './HeaderDetail'

export default function MainInfo({ details }) {
  const mui = useStyles()

  return (
    <Paper elevation={3} className={mui.paper}>
      <HeaderDetail details={details} />

      <BodyDetail details={details} />
    </Paper>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '15px 20px',
  },
}))

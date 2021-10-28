import { Paper } from '@material-ui/core'
import BodyDetail from './BodyDetail'
import HeaderDetail from './HeaderDetail'

export default function MainInfo({ details }) {
  return (
    <Paper elevation={3}>
      <HeaderDetail details={details} />

      <BodyDetail details={details} />
    </Paper>
  )
}

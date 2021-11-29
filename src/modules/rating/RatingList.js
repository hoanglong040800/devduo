import { makeStyles } from '@material-ui/styles'
import RatingItem from './RatingItem'

export default function RatingList({ list }) {
  const mui = useStyles()

  return (
    <div className={mui.paper}>
      <h2>Ratings & Comments</h2>

      {
        //
        list.length ? (
          list.map(item => <RatingItem item={item} />)
        ) : (
          <p align="center">No rating for this mentor</p>
        )
      }
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    background: '#fff',
    padding: theme.spacing(3, 3),
    borderRadius: theme.shape.borderRadius,
  },
}))

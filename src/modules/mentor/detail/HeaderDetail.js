import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import ContactDetail from './ContactDetail'

export default function HeaderDetail({ details }) {
  const mui = useStyles()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <div className={mui.imgContainer}>
          <img
            src={details.thumnail}
            alt={details.full_name}
            className={mui.img}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={8}>
        <div className={mui.content}>
          <Typography variant="h4">{details.full_name}</Typography>

          <ContactDetail contacts={details.contacts} />
        </div>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  imgContainer: {
    display: 'flex',
    margin: '0 auto',
    width: '100%',
    height: 150,

    [theme.breakpoints.down('sm')]: {
      width: 150,
      height: 150,
    },
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
  },

  content: {
    padding: [theme.spacing(2, 3)],

    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
}))

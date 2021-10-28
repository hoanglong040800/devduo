import { Box, makeStyles } from '@material-ui/core'

export default function HeaderDetail({ details }) {
  const mui = useStyles()

  return (
    <Box>
      <div className={mui.imgContainer}>
        <img
          src={details.thumnail}
          alt={details.full_name}
          className={mui.img}
        />
      </div>

      <Box px={2} py={2}>
        <h2>Elon Musk</h2>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.down('md')]: {
      width: 100,
      height: 100,
    },

    [theme.breakpoints.up('md')]: {
      width: 200,
      height: 200,
    },
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
    borderRadius: 1000,
  },
}))

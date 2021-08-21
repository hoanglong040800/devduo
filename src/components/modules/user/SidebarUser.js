import { Paper, makeStyles } from '@material-ui/core'

export default function SidebarUser() {
  const classes = useStyles()

  return (
    <Paper variant="outlined">
      <div className={`${classes.item} ${classes.active}`}>
        <div>Profile</div>
      </div>

      <div className={classes.item}>Plan service</div>

      <div className={classes.item}>Account</div>

      <div className={classes.item}>Settings</div>
    </Paper>
  )
}

const useStyles = makeStyles(theme => ({
  item: {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 700,
    color: '#989898',
    borderBottom: '1px solid lightgray',
    cursor: 'pointer',

    '&:hover': {
      background: '#f9f9f9',
    },
  },

  active: {
    color: theme.palette.primary.main,
    borderLeft: `5px solid ${theme.palette.primary.main}`,
  },
}))

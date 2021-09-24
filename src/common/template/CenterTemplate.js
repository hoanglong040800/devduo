import { makeStyles } from '@material-ui/core'

export default function CenterTemplate({ children }) {
  const classes = useStyles()

  return <main className={classes.main}>{children}</main>
}

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
})

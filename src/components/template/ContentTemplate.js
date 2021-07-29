import { makeStyles } from '@material-ui/core'
import DefaultLayout from 'components/layout/DefaultLayout'

export default function ContentTemplate({ children }) {
  const classes = useStyles()

  return (
    <DefaultLayout>
      <main className={classes.main}>{children}</main>
    </DefaultLayout>
  )
}

const useStyles = makeStyles({
  main: {
    margin: '30px 0',
  },
})

import { Paper, makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export default function SidebarUser() {
  const classes = useStyles()
  const router = useRouter()
  const userOption = useSelector(state => state.userOption)

  return (
    <Paper variant="outlined">
      {userOption.map((item, index) => {
        return (
          <div
            key={index}
            name={item.name}
            className={`${classes.item} ${item.active ? classes.active : ''}`}
            onClick={() => router.push(item.link)}
          >
            <div>{item.display}</div>
          </div>
        )
      })}
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
    transition: '0.2s',
  },
}))

import { Paper, makeStyles } from '@material-ui/core'
import { useState } from 'react'

export default function SidebarUser() {
  const classes = useStyles()
  const [userOption, setUserOption] = useState([
    {
      name: 'profile',
      display: 'Profile',
      active: true,
    },
    {
      name: 'plan',
      display: 'Plan service',
      active: false,
    },
    {
      name: 'account',
      display: 'Account',
      active: false,
    },
    {
      name: 'settings',
      display: 'Settings',
      active: false,
    },
  ])

  function clickHandler(e) {

    let newUserOption = userOption.map(item => {
      return item.name === e.currentTarget.getAttribute('name')
        ? { ...item, active: true }
        : { ...item, active: false }
    })

    setUserOption(newUserOption)
  }

  return (
    <Paper variant="outlined">
      {userOption.map((item, index) => {
        return (
          <div
            key={index}
            name={item.name}
            className={`${classes.item} ${item.active ? classes.active : ''}`}
            onClick={clickHandler}
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

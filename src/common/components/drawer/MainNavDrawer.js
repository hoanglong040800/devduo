import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import Link from 'next/link'
import NavLogo from '../navbar/NavLogo'

export default function MainNavDrawer({ open, onClose }) {
  const mui = useStyles()

  return (
    <Drawer open={open} onClose={onClose}>
      <List className={mui.list}>
        <center>
          <NavLogo />
        </center>

        <Link href="/mentors">
          <a>
            <ListItem button onClick={onClose}>
              <ListItemText primary="Find mentor" />
            </ListItem>
          </a>
        </Link>

        <Link href="/about">
          <a>
            <ListItem button onClick={onClose}>
              <ListItemText primary="About" />
            </ListItem>
          </a>
        </Link>
      </List>
    </Drawer>
  )
}

const useStyles = makeStyles(theme => ({
  list: {
    width: 150,
    padding: theme.spacing(3, 0),
  },
}))

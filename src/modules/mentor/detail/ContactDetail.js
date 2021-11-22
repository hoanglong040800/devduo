import { Box, makeStyles } from '@material-ui/core'
import {
  privateContactsComponent,
  publicContactsComponents,
} from 'common/utils/constants'

export default function ContactDetail({ contacts, type = 'public' }) {
  const mui = useStyles()
  const contactsComponents =
    type === 'public' ? publicContactsComponents : privateContactsComponent

  return (
    <Box mt={1}>
      {
        //
        Object.keys(contactsComponents).map(key => {
          const url = contacts[key]
          if (!url) return null
          const simplified = url.replace(/(^\w+:|^)\/\//, '')

          return (
            <Box display="flex" key={key}>
              <div>{contactsComponents[key]}</div>

              <a href={url} target="_blank" className={mui.link}>
                {simplified}
              </a>
            </Box>
          )
        })
      }
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  link: {
    color: [theme.palette.primary.main],
    marginLeft: [theme.spacing(2)],

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

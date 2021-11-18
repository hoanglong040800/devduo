import { Box, makeStyles } from '@material-ui/core'
import { Facebook, GitHub, Language, LinkedIn } from '@material-ui/icons'

const contactsComponents = {
  facebook: <Facebook style={{ color: '#1877F2' }} />,
  github: <GitHub style={{ color: '#333' }} />,
  linkedin: <LinkedIn style={{ color: '#0077B5' }} />,
  website: <Language style={{ color: '#333' }} />,
}

export default function ContactDetail({ contacts }) {
  const mui = useStyles()

  return (
    <Box my={2}>
      {
        //
        Object.keys(contacts).map(key => {
          const url = contacts[key]
          const simlifiedUrl = url.replace(/(^\w+:|^)\/\//, '')

          return (
            simlifiedUrl && (
              <Box display="flex" key={key}>
                <div>{contactsComponents[key]}</div>

                <a href={url} target="_blank" className={mui.link}>
                  {simlifiedUrl}
                </a>
              </Box>
            )
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

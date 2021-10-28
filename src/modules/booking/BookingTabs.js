import { Box, makeStyles, Paper, Tab, Tabs } from '@material-ui/core'
import { bookingPages } from 'common/utils/constants'
import { useRouter } from 'next/router'

export default function BookingTabs({ children, value }) {
  const router = useRouter()
  const mui = useStyles()

  return (
    <>
      <Box display="flex" justifyContent="center" mb={3}>
        <Tabs value={value} variant="fullWidth">
          {
            //
            bookingPages.map(item => (
              <Tab
                key={item.label}
                label={item.label}
                value={item.pathname}
                onClick={() => router.push(item.pathname)}
                className={mui.tab}
              />
            ))
          }
        </Tabs>
      </Box>

      {children}
    </>
  )
}

const useStyles = makeStyles(theme => ({
  tab: {
    fontSize: '1rem',
    fontWeight: 700,
    borderBottom: '1px solid lightgray',
    color: [theme.palette.secondary.dark],
  },
}))

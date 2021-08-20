import { Box, Grid } from '@material-ui/core'

export default function SidebarSmTemplate({ sidebar, main, showSidebar = true }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <Box display={showSidebar ? 'block' : 'none'}>{sidebar}</Box>
      </Grid>

      <Grid item xs={12} sm={showSidebar ? 9 : 12}>
        {main}
      </Grid>
    </Grid>
  )
}

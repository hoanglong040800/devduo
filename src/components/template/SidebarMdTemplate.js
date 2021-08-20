import { Box, Grid } from '@material-ui/core'

export default function SidebarMdTemplate({ sidebar, main, showSidebar = true }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Box display={showSidebar ? 'block' : 'none'}>{sidebar}</Box>
      </Grid>

      <Grid item xs={12} md={showSidebar ? 9 : 12}>
        {main}
      </Grid>
    </Grid>
  )
}

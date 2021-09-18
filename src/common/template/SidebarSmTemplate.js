import { Box, Grid } from '@material-ui/core'
import ContentTemplate from './ContentTemplate'

export default function SidebarSmTemplate({
  sidebar,
  children,
  showSidebar = true,
}) {
  return (
    <ContentTemplate>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Box display={showSidebar ? 'block' : 'none'}>{sidebar}</Box>
        </Grid>

        <Grid item xs={12} sm={showSidebar ? 9 : 12}>
          {children}
        </Grid>
      </Grid>
    </ContentTemplate>
  )
}

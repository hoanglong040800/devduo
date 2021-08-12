import { Grid, Paper } from '@material-ui/core'

export default function SidebarTemplate({ sidebar, main, showSidebar = true }) {
  return (
    <Grid container spacing={2}>
      {showSidebar ? (
        <>
          <Grid item xs={12} md={3}>
            {sidebar}
          </Grid>

          <Grid item xs={12} md={9}>
            {main}
          </Grid>
        </>
      ) : (
        <Grid item xs={12}>
          {main}
        </Grid>
      )}
    </Grid>
  )
}

import { Grid, Paper } from '@material-ui/core'

export default function SidebarTemplate({ sidebar, main }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        {sidebar}
      </Grid>

      <Grid item xs={12} md={9}>
        {main}
      </Grid>
    </Grid>
  )
}

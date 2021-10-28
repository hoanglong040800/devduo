import { Grid } from '@material-ui/core'

export default function RightSidebarTemplate({ children, sidebar }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        {children}
      </Grid>

      <Grid item xs={12} md={4}>
        {sidebar}
      </Grid>
    </Grid>
  )
}

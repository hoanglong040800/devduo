import { Box, Grid } from '@material-ui/core'
import ItemMentor from './ItemMentor'

export default function ListMentor() {
  return (
    <Box bgcolor="#e6e3e3">
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4}>
          <ItemMentor />
        </Grid>

        <Grid item xs={6} sm={4}>
          <ItemMentor />
        </Grid>

        <Grid item xs={6} sm={4}>
          <ItemMentor />
        </Grid>

        <Grid item xs={6} sm={4}>
          <ItemMentor />
        </Grid>
      </Grid>
    </Box>
  )
}

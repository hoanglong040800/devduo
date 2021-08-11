import { Box, Grid } from '@material-ui/core'
import ItemMentor from './ItemMentor'

export default function ListMentor() {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ItemMentor />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ItemMentor />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ItemMentor />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ItemMentor />
        </Grid>
      </Grid>
    </Box>
  )
}

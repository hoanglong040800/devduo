import { Box, Grid, Paper } from '@material-ui/core'

export default function FIlterMentor({}) {
  const props = {
    gridTwo: {
      item: true,
      xs: 12,
      sm: 6,
      md: 12,
    },

    gridThree: {
      item: true,
      xs: 12,
      sm: 4,
      md: 12,
    },
  }

  return (
    <Paper>
      <Box p={1}>
        <Grid container spacing={3}>
          <Grid {...props.gridThree}>Name</Grid>

          <Grid {...props.gridThree}>Money</Grid>

          <Grid {...props.gridThree}>Mentee</Grid>

          <Grid {...props.gridTwo}>Fields</Grid>

          <Grid {...props.gridTwo}>Tech</Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

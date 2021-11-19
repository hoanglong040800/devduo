import { Box, Grid } from '@material-ui/core'
import ItemMentor from './ItemMentor'

export default function ListMentor({ list, showSidebar = false }) {
  return (
    <>
      {
        //
        list.length !== 0 ? (
          <Grid container spacing={3}>
            {list.map(item => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={showSidebar ? 6 : 4}
                  lg={showSidebar ? 4 : 3}
                  key={item.id}
                >
                  <ItemMentor item={item} />
                </Grid>
              )
            })}
          </Grid>
        ) : (
          <Box display="flex" justifyContent="center" my={10}>
            <h2>No mentors to show :( </h2>
          </Box>
        )
      }
    </>
  )
}

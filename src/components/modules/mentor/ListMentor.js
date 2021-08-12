import { Box, Grid } from '@material-ui/core'
import ItemMentor from './ItemMentor'

export default function ListMentor({ list, showSidebar = true }) {
  return (
    <Box>
      <Grid container spacing={3}>
        {list
          ? list.map(item => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={showSidebar ? 6 : 4}
                  key={item.id}
                >
                  <ItemMentor item={item} />
                </Grid>
              )
            })
          : 'Loading...'}
      </Grid>
    </Box>
  )
}

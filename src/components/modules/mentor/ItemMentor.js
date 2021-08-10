import Image from 'next/image'
import { Paper, Box } from '@material-ui/core'
import classes from 'styles/mentor/ItemMentor.module.css'

export default function ItemMentor() {
  return (
    <Paper className={classes.paper}>
      <div className={classes.imageContainer}>
        <img src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg" />
      </div>

      <div className={classes.content}>
        <Box mt={2}>
          <h4>Full Name</h4>
        </Box>

        <Box mt={2}>
          <p>Fields</p>
        </Box>

        <Box mt={2}>
          <p>Language</p>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Box>Mentored: 20</Box>

          <Box>Start at: 20k</Box>
        </Box>
      </div>
    </Paper>
  )
}

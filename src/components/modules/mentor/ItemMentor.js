import { Paper, Box, Button, IconButton, Typography } from '@material-ui/core'
import {
  AttachMoney,
  Code,
  Favorite,
  FavoriteBorder,
  WorkOutlineOutlined,
} from '@material-ui/icons'
import { useState } from 'react'
import classes from 'styles/mentor/ItemMentor.module.css'

const dummyField = [
  'AI',
  'Blockchain',
  'IoT',
  'AI',
  'Blockchain',
  'IoT',
  'AI',
  'Blockchain',
  'IoT',
]

const dummyTech = [
  'ReactJS',
  'NextJS',
  'Material UI',
  'BS4',
  'ReactJS',
  'NextJS',
  'Material UI',
  'BS4',
]

export default function ItemMentor() {
  const [fav, setFav] = useState(false)

  return (
    <Paper
      className={classes.paper}
      onClick={() => alert('Item Mentor Clicked')}
    >
      <div className={classes.thumnail}>
        <img src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg" />
      </div>

      <content className={classes.content}>
        <div className={classes.info}>
          <Box
            mb={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <h4>Elon Musk</h4>

            {fav ? (
              <IconButton
                size="small"
                color="primary"
                onClick={e => {
                  e.stopPropagation()
                  setFav(false)
                }}
              >
                <Favorite />
              </IconButton>
            ) : (
              <IconButton
                size="small"
                onClick={e => {
                  e.stopPropagation()
                  setFav(true)
                }}
              >
                <FavoriteBorder />
              </IconButton>
            )}
          </Box>

          <Box className={classes.tech}>
            <WorkOutlineOutlined className={classes.icon} />

            <Box>
              {dummyField.slice(0, 5).map(item => {
                return (
                  <Button
                    size="small"
                    className={classes.techItem}
                    onClick={e => {
                      e.stopPropagation()
                    }}
                  >
                    {item}
                  </Button>
                )
              })}
            </Box>
          </Box>

          <Box className={classes.tech}>
            <Code className={classes.icon} />

            <Box>
              {dummyTech.slice(0, 5).map(item => {
                return (
                  <Button
                    size="small"
                    className={classes.techItem}
                    onClick={e => {
                      e.stopPropagation()
                    }}
                  >
                    {item}
                  </Button>
                )
              })}
            </Box>
          </Box>
        </div>

        <Box className={classes.stats}>
          <p>Mentee: 20</p>

          <Box display="flex" alignItems="center">
            <AttachMoney size="small" color="secondary" />

            <Typography color="secondary">
              <b>20k</b>
            </Typography>
          </Box>
        </Box>
      </content>
    </Paper>
  )
}

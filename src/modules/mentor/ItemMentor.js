import Image from 'next/image'
import { Paper, Box, IconButton, Typography, Chip } from '@material-ui/core'
import {
  AttachMoney,
  Code,
  Favorite,
  FavoriteBorder,
  WorkOutlineOutlined,
} from '@material-ui/icons'
import { useState } from 'react'
import classes from './styles/ItemMentor.module.css'
import { useRouter } from 'next/router'

export default function ItemMentor({ item }) {
  const [fav, setFav] = useState(false)
  const router = useRouter()

  return (
    <Paper
      className={classes.paper}
      onClick={() => router.push(`/mentors/${item.user_id}`)}
    >
      <div className={classes.thumnail}>
        <img
          src={item.thumnail}
          alt={item.full_name}
        />
      </div>

      <div className={classes.content}>
        <div className={classes.header}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant='h6'>{item.full_name}</Typography>

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
              {item.fields.slice(0, 5).map(field => {
                return (
                  <Chip
                    label={field.name}
                    size="small"
                    variant="outlined"
                    key={field.id}
                  />
                )
              })}
            </Box>
          </Box>

          <Box className={classes.tech}>
            <Code className={classes.icon} />

            <Box>
              {item.technologies.slice(0, 5).map(technology => {
                return (
                  <Chip
                    label={technology.name}
                    size="small"
                    variant="outlined"
                    key={technology.id}
                  />
                )
              })}
            </Box>
          </Box>
        </div>

        <Box className={classes.footer}>
          <p>Finish: 15</p>

          <Box display="flex" alignItems="center">
            <AttachMoney size="small" color="secondary" />

            <Typography color="secondary">
              <b>{item.price}/h</b>
            </Typography>
          </Box>
        </Box>
      </div>
    </Paper>
  )
}

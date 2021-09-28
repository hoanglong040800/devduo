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
import { convertMoney } from 'common/utils/utils'
import { useRouter } from 'next/router'

export default function ItemMentor({ item }) {
  const [fav, setFav] = useState(false)
  const router = useRouter()

  return (
    <Paper
      className={classes.paper}
      onClick={() => router.push(`/mentor/${item.id}`)}
    >
      <div className={classes.thumnail}>
        <Image
          src={`/api/imageproxy?url=${encodeURIComponent(item.thumnail)}`}
          layout="fill"
          objectFit="cover"
          alt={item.fullname}
          quality={60}
        />
      </div>

      <div className={classes.content}>
        <div className={classes.info}>
          <Box
            mb={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <h4>{item.fullname}</h4>

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
              {item.field.slice(0, 5).map((field, index) => {
                return (
                  <Chip
                    label={field}
                    size="small"
                    variant="outlined"
                    key={index}
                  />
                )
              })}
            </Box>
          </Box>

          <Box className={classes.tech}>
            <Code className={classes.icon} />

            <Box>
              {item.tech.slice(0, 5).map((tech, index) => {
                return (
                  <Chip
                    label={tech}
                    size="small"
                    variant="outlined"
                    key={index}
                  />
                )
              })}
            </Box>
          </Box>
        </div>

        <Box className={classes.stats}>
          <p>Mentee: {item.mentee}</p>

          <Box display="flex" alignItems="center">
            <AttachMoney size="small" color="secondary" />

            <Typography color="secondary">
              <b>{item.money}/h</b>
            </Typography>
          </Box>
        </Box>
      </div>
    </Paper>
  )
}
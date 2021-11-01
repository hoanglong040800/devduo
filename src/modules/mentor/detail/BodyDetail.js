import { Box, Chip, Typography } from '@material-ui/core'

export default function BodyDetail({ details }) {
  return (
    <Box my={5}>
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          Fields
        </Typography>
        {
          //
          details.fields.map(item => (
            <Chip key={item.id} label={item.name} variant="outlined" />
          ))
        }
      </Box>

      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          Technologies
        </Typography>
        {
          //
          details.technologies.map(item => (
            <Chip key={item.id} label={item.name} variant="outlined" />
          ))
        }
      </Box>

      <Box>
        <Typography variant="h5" gutterBottom>
          Description
        </Typography>
        <Typography variant="body">{details.description}</Typography>
      </Box>
    </Box>
  )
}

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Grid, MenuItem, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AutocompleteController from 'common/components/input/AutocompleteController'
import SelectController from 'common/components/input/SelectController'
import TextFieldController from 'common/components/input/TextFieldController'
import { useForm } from 'react-hook-form'

export default function FIlterMentor({ allFields, allTechnologies,onFilter }) {
  const mui = useStyles()

  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      full_name: '',
      price: '',
      mentee: '',
      fields: '',
      technologies: [],
    },
  })

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

  function onError(errors) {
    console.log('ERROR', errors)
  }

  return (
    <Paper className={mui.paper}>
      <Grid container spacing={3}>
        <Grid {...props.gridThree}>
          <TextFieldController
            name="full_name"
            label="Fullname"
            control={control}
            errors={errors}
          />
        </Grid>

        <Grid {...props.gridThree}>
          <SelectController
            name="price"
            label="Price"
            control={control}
            errors={errors}
          >
            <MenuItem value="">Any</MenuItem>
            <MenuItem value="asc">Low to high</MenuItem>
            <MenuItem value="desc">High to low</MenuItem>
          </SelectController>
        </Grid>

        <Grid {...props.gridThree}>
          <SelectController
            name="mentee"
            label="Mentee"
            control={control}
            errors={errors}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </SelectController>
        </Grid>

        <Grid {...props.gridTwo}>
          <SelectController
            name="fields"
            label="Fields"
            control={control}
            errors={errors}
          >
            <MenuItem value="">Any</MenuItem>
            {
              //
              allFields.map(item => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))
            }
          </SelectController>
        </Grid>

        <Grid {...props.gridTwo}>
        <SelectController
            name="technologies"
            label="Technologies"
            control={control}
            errors={errors}
          >
            <MenuItem value="">Any</MenuItem>
            {
              //
              allTechnologies.map(item => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))
            }
          </SelectController>
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="flex-end" mt={3}>
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={handleSubmit(onFilter, onError)}
        >
          Filter
        </Button>
      </Box>
    </Paper>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: [theme.spacing(2, 3)],
  },
}))

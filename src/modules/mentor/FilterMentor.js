import { Box, Button, Grid, MenuItem, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SelectController from 'common/components/input/SelectController'
import TextFieldController from 'common/components/input/TextFieldController'
import { useForm } from 'react-hook-form'

export default function FIlterMentor({
  allFields,
  allTechnologies,
  onFilter,
  onSearch,
}) {
  const mui = useStyles()

  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      full_name: '',
      min_price: '',
      fields: '',
      technologies: '',
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

  function handleSearch() {
    handleSubmit(onSearch, onError)()
    reset({
      full_name: watch('full_name'),
      min_price: '',
      fields: '',
      technologies: '',
    })
  }

  function handleFilter() {
    handleSubmit(onFilter, onError)()
    reset({
      full_name: '',
      min_price: watch('min_price'),
      fields: watch('fields'),
      technologies: watch('technologies'),
    })
  }

  function onError(errors) {
    console.log('ERROR', errors)
  }

  return (
    <Paper className={mui.paper}>
      <TextFieldController
        name="full_name"
        label="Full Name"
        control={control}
        errors={errors}
      />

      <Box display="flex" justifyContent="flex-end" mt={3}>
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Grid container spacing={3}>
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

        <Grid {...props.gridTwo}>
          <SelectController
            name="min_price"
            label="Min price ($/h)"
            control={control}
            errors={errors}
          >
            <MenuItem value="">Any</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </SelectController>
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="flex-end" mt={3}>
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={handleFilter}
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

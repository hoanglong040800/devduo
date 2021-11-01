import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Grid, MenuItem, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AutocompleteController from 'common/components/input/AutocompleteController'
import SelectController from 'common/components/input/SelectController'
import TextFieldController from 'common/components/input/TextFieldController'
import { mentorFilterSchema } from 'common/utils/validation-schema'
import { useForm } from 'react-hook-form'

export default function FIlterMentor({ allFields, allTechnologies }) {
  const mui = useStyles()

  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(mentorFilterSchema),

    defaultValues: {
      full_name: '',
      price: 'asc',
      mentee: '',
      fields: [],
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

  function onSubmit(data) {
    console.log('SUBMIT', data)
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
            <MenuItem value="">Any</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="10">20</MenuItem>
            <MenuItem value="10">30</MenuItem>
          </SelectController>
        </Grid>

        <Grid {...props.gridTwo}>
          <AutocompleteController
            name="fields"
            label="Fields"
            options={allFields}
            control={control}
            errors={errors}
            setValue={setValue}
          />
        </Grid>

        <Grid {...props.gridTwo}>
          <AutocompleteController
            name="technologies"
            label="Technologies"
            options={allTechnologies}
            control={control}
            errors={errors}
            setValue={setValue}
          />
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="flex-end" mt={3}>
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={handleSubmit(onSubmit, onError)}
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

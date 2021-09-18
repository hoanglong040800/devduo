import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Chip, Grid, makeStyles } from '@material-ui/core'
import { WorkOutlineOutlined } from '@material-ui/icons'
import MultiCheckboxController from 'common/components/MultiCheckboxController'
import TextAreaController from 'common/components/TextAreaController'
import TextFieldController from 'common/components/TextFieldController'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { changeUserOption } from 'common/store/userOptionSlice'
import { schema } from 'common/utils/validation-schema'
import SidebarUser from 'modules/user/SidebarUser'
import SidebarSmTemplate from 'common/template/SidebarSmTemplate'
import ContentTemplate from 'common/template/ContentTemplate'

export async function getServerSideProps() {
  const fieldRes = await fetch(`${process.env.API_URL}/field`)
  const fieldData = await fieldRes.json()

  const techRes = await fetch(`${process.env.API_URL}/technology`)
  const techData = await techRes.json()

  return {
    props: {
      fieldList: fieldData,
      techList: techData,
    },
  }
}

export default function UserProfile({ fieldList, techList }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const property = {
    leftGrid: {
      item: true,
      xs: 12,
      sm: 4,
    },

    rightGrid: {
      item: true,
      xs: 12,
      sm: 8,
    },

    fullGrid: {
      item: true,
      xs: 12,
    },

    form: {
      control: control,
      errors: errors,
    },
  }

  const [selectedFields, setSelectedFields] = useState([])
  const [selectedTechs, setSelectedTechs] = useState([])

  useEffect(() => {
    dispatch(changeUserOption('profile'))
  }, [])

  function onSubmit() {
    alert(watch('fields'))
  }

  return (
    <SidebarSmTemplate sidebar={SidebarUser}>
      <h1>Profile</h1>

      <form>
        <Grid container spacing={4}>
          <Grid {...property.leftGrid}>
            <TextFieldController
              name="thumnailUrl"
              label="Thumnail URL"
              {...property.form}
            />
          </Grid>

          <Grid {...property.rightGrid}>
            <h3>Thumnail image</h3>
          </Grid>

          <Grid {...property.fullGrid}>
            <TextFieldController
              name="fullname"
              label="Full Name"
              {...property.form}
            />
          </Grid>

          <Grid {...property.leftGrid}>
            <Box display="flex" alignItems="center">
              <WorkOutlineOutlined />
              Field
            </Box>

            <Box className={classes.checkboxGroup}>
              <MultiCheckboxController
                list={fieldList}
                name="fields"
                control={control}
                setValue={setValue}
                selectedList={selectedFields}
                setSelectedList={setSelectedFields}
              />
            </Box>
          </Grid>

          <Grid {...property.rightGrid}>
            <Box my={5}>
              {
                //
                selectedFields.map(item => (
                  <Chip key={item} label={item} variant="outlined" />
                ))
              }
            </Box>
          </Grid>

          <Grid {...property.fullGrid}>
            <TextAreaController
              name="description"
              label="Description"
              {...property.form}
            />
          </Grid>

          <Box display="flex" justifyContent="flex-end" my={5}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={onSubmit}
            >
              Save
            </Button>
          </Box>
        </Grid>
      </form>
    </SidebarSmTemplate>
  )
}

const useStyles = makeStyles({
  checkboxGroup: {
    height: 150,
    margin: '15px 0',
    padding: '0 20px',
    overflowY: 'scroll',
  },
})

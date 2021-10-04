import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Divider, Grid, makeStyles } from '@material-ui/core'
import TextAreaController from 'common/components/input/TextAreaController'
import TextFieldController from 'common/components/input/TextFieldController'
import { useForm } from 'react-hook-form'
import { profileSchema } from 'common/utils/validation-schema'
import SidebarUser from 'modules/user/SidebarUser'
import { getSession } from 'next-auth/client'
import { url } from 'common/utils/constants'
import Head from 'next/head'

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: url.notLogin,
        permanent: false,
      },
    }
  }

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
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(profileSchema),
  })

  const property = {
    form: {
      control: control,
      errors: errors,
    },
  }

  function onSubmit(data) {
    console.log('SUBMIT', data)
  }

  function onError(err) {
    console.log('ERROR', err)
  }

  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>

      <SidebarUser value="/user/profile">
        <h1>Profile</h1>

        <Divider />

        <TextFieldController
          name="fullname"
          label="Full Name"
          required
          {...property.form}
        />

        <TextFieldController
          name="thumnail_url"
          label="Thumnail URL"
          required
          {...property.form}
        />

        <TextAreaController
          name="description"
          label="Description"
          {...property.form}
        />

        <Box display="flex" justifyContent="flex-end" my={5}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit(onSubmit, onError)}
          >
            Save
          </Button>
        </Box>
      </SidebarUser>
    </>
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

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Divider } from '@material-ui/core'
import TextAreaController from 'common/components/input/TextAreaController'
import TextFieldController from 'common/components/input/TextFieldController'
import { useForm } from 'react-hook-form'
import { profileSchema } from 'common/utils/validation-schema'
import SidebarUser from 'modules/user/SidebarUser'
import { getSession } from 'next-auth/client'
import { url } from 'common/utils/constants'
import Head from 'next/head'
import { fetchAllFields, fetchAllTech } from 'modules/mentor/fetch-mentor'
import AutocompleteController from 'common/components/input/AutocompleteController'
import { arrToObjWithData } from 'common/utils/utils'

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

  return {
    props: {
      fieldOptions: await fetchAllFields(process.env.API_URL),
      techOptions: await fetchAllTech(process.env.API_URL),
    },
  }
}

export default function UserProfile({ fieldOptions, techOptions }) {
  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      fullname: 'abc',
      thumnail_url: 'http://abc.com',
      money: 10,
      fields: [],
      tech: [],
      description: '',
      contact: {},
      phone: '0937229340',
      fb: 'http://fb.com',
      linkedin: 'http://linkedin.com',
    },
  })

  const property = {
    form: {
      control: control,
      errors: errors,
      setValue: setValue,
    },
  }

  const contacts = ['phone', 'fb', 'linkedin']

  function onSubmit(data) {
    // assemble contact from contact fields
    setValue('contact', arrToObjWithData(contacts, data))

    // empty contacts to avoid errors at BE
    contacts.map(value => {
      data[value] = ''
    })

    data['contact'] = watch('contact')
    data['user_id'] = 123

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
        <h1>Edit Profile</h1>

        <Divider />

        <Box display="flex" flexDirection="column" mx="auto" maxWidth="500px">
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

          <TextFieldController
            name="money"
            label="Money ($/h)"
            type="number"
            required
            {...property.form}
          />

          <Box mt={2}>
            <AutocompleteController
              name="fields"
              label="Fields"
              options={fieldOptions}
              {...property.form}
            />
          </Box>

          <Box mt={2}>
            <AutocompleteController
              name="tech"
              label="Tech"
              options={techOptions}
              {...property.form}
            />
          </Box>

          <Box mt={2}>
            <TextAreaController
              name="description"
              label="Description"
              {...property.form}
            />
          </Box>

          <Box mt={2} maxWidth="300px">
            <h3>Contacts*</h3>

            <TextFieldController
              name="phone"
              label="Phone Number"
              required
              {...property.form}
            />

            <TextFieldController
              name="fb"
              label="Faccebook"
              {...property.form}
            />

            <TextFieldController
              name="linkedin"
              label="LinkedIn"
              {...property.form}
            />
          </Box>

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
        </Box>
      </SidebarUser>
    </>
  )
}

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Divider } from '@material-ui/core'
import TextAreaController from 'common/components/input/TextAreaController'
import TextFieldController from 'common/components/input/TextFieldController'
import { useForm } from 'react-hook-form'
import { profileSchema } from 'common/utils/validation-schema'
import SidebarUser from 'modules/user/SidebarUser'
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import AutocompleteController from 'common/components/input/AutocompleteController'
import { arrToObjWithData } from 'common/utils/utils'
import { getAllFields, getAllTech } from 'modules/fetch-common'
import { getMentorById } from 'modules/mentor/fetch-mentors'

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  const apiUrl = process.env.API_URL

  return {
    props: {
      session,
      apiUrl,
      allFields: await getAllFields(apiUrl),
      allTechnologies: await getAllTech(apiUrl),
      mentorDetails: await getMentorById(apiUrl, session.user.id),
    },
  }
}

export default function UserProfile({
  session,
  apiUrl,
  allFields,
  allTechnologies,
  mentorDetails,
}) {
  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      full_name: mentorDetails.full_name || '',
      thumnail: mentorDetails.thumnail || '',
      price: mentorDetails.price || 5,
      fields: mentorDetails.fields || [],
      technologies: mentorDetails.technologies || [],
      description: mentorDetails.description || '',

      contacts: mentorDetails.contacts || {},
      facebook: mentorDetails.facebook || '',
      linkedin: mentorDetails.linkedin || '',
    },
  })

  const property = {
    form: {
      control: control,
      errors: errors,
      setValue: setValue,
    },
  }

  function onSubmit(data) {
    const contactFields = ['facebook', 'linkedin']

    // assemble contact from contact fields
    setValue('contact', arrToObjWithData(contactFields, data))

    // empty contact fields to avoid errors at BE
    contactFields.map(value => {
      delete data[value]
    })

    data['contacts'] = watch('contacts')

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

      <SidebarUser value="/user/edit-profile">
        <h1>Edit Profile</h1>

        <Divider />

        <Box display="flex" flexDirection="column" mx="auto" maxWidth="500px">
          <TextFieldController
            name="full_name"
            label="Full Name"
            required
            {...property.form}
          />

          <TextFieldController
            name="thumnail"
            label="Thumnail URL"
            required
            {...property.form}
          />

          <TextFieldController
            name="price"
            label="Money ($/h)"
            type="number"
            required
            {...property.form}
          />

          <Box mt={2}>
            <AutocompleteController
              name="fields"
              label="Fields"
              options={allFields}
              defaultValue={mentorDetails.fields}
              required
              {...property.form}
            />
          </Box>

          <Box mt={2}>
            <AutocompleteController
              name="technologies"
              label="Technologies"
              options={allTechnologies}
              defaultValue={mentorDetails.technologies}
              required
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
            <h3>Contacts</h3>

            <TextFieldController
              name="facebook"
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

UserProfile.auth = true

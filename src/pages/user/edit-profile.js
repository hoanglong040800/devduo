import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button } from '@material-ui/core'
import TextAreaController from 'common/components/input/TextAreaController'
import TextFieldController from 'common/components/input/TextFieldController'
import { useForm } from 'react-hook-form'
import { profileSchema } from 'common/utils/validation-schema'
import SidebarUser from 'modules/user/SidebarUser'
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import AutocompleteController from 'common/components/input/AutocompleteController'
import { arrToObjWithData } from 'common/utils/utils'
import { getAllFields, getAllTechnologies } from 'modules/fetch-common'
import { getMentorById, updateMentor } from 'modules/mentor/fetch-mentors'
import { makeStyles } from '@material-ui/styles'
import { useRouter } from 'next/router'

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  const apiUrl = process.env.API_URL

  return {
    props: {
      session,
      apiUrl,
      allFields: await getAllFields('http://localhost:8000'),
      allTechnologies: await getAllTechnologies('http://localhost:8000'),
      mentorDetails: await getMentorById(
        'http://localhost:8000',
        session.user.id
      ),
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
      thumbnail: mentorDetails.thumbnail || '',
      price: mentorDetails.price || 5,
      fields: mentorDetails.fields || [],
      technologies: mentorDetails.technologies || [],
      description: mentorDetails.description || '',

      contacts: mentorDetails.contacts || {},
      facebook: mentorDetails.contacts.facebook || '',
      linkedin: mentorDetails.contacts.linkedin || '',
      github: mentorDetails.contacts.github || '',
      website: mentorDetails.contacts.website || '',
    },
  })

  const mui = useStyles()
  const router = useRouter()
  const property = {
    form: {
      control: control,
      errors: errors,
      setValue: setValue,
    },
  }

  async function onSubmit(data) {
    const contactFields = ['facebook', 'website', 'linkedin', 'github']

    // assemble contact from contact fields
    setValue('contacts', arrToObjWithData(contactFields, data))

    // empty contact fields to avoid errors at BE
    contactFields.map(value => {
      delete data[value]
    })

    data['contacts'] = watch('contacts')
    data['user'] = session.user.id
    data['fields'] = data['fields'].map(item => item.id)
    data['technologies'] = data['technologies'].map(item => item.id)

    // console.log('SUBMIT', data)

    await updateMentor('http://localhost:8000', session.user.id, data)
    // router.push(`/mentors/${session.user.id}`)
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
        <Box display="flex" flexDirection="column" mx="auto" maxWidth="500px">
          <Box className={mui.imgContainer}>
            <img
              src={watch('thumbnail')}
              alt={session.user.full_name}
              width="100%"
              height="100%"
            />
          </Box>

          <TextFieldController
            name="full_name"
            label="Full Name"
            required
            {...property.form}
          />

          <TextFieldController
            name="thumbnail"
            label="Thumbnail URL"
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
              required
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

            <TextFieldController
              name="github"
              label="Github"
              {...property.form}
            />

            <TextFieldController
              name="website"
              label="Website"
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
              Update
            </Button>
          </Box>
        </Box>
      </SidebarUser>
    </>
  )
}

UserProfile.auth = true

const useStyles = makeStyles(theme => ({
  imgContainer: {
    display: 'flex',
    margin: '0 auto',
    width: '100%',
    maxWidth: 200,
    maxHeight: 200,

    '& img': {
      borderRadius: [theme.shape.borderRadius],
      border: '1px solid rgba(0, 0, 0, 0.05)',
    },
  },
}))

import { Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { getLimitMentors } from 'modules/mentor/fetch-mentors'
import ListMentor from 'modules/mentor/ListMentor'
import { useSession } from 'next-auth/client'
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  return {
    props: { limitMentors: await getLimitMentors(process.env.API_URL, 4) },
  }
}

export default function HomePage({ limitMentors }) {
  const [session, loading] = useSession()
  const router = useRouter()
  const mui = useStyles()

  return (
    <>
      <Head>
        <title>Home - DevDuo</title>
      </Head>

      {
        //
        session ? (
          <h1>
            Hello,{' '}
            <span className={mui.fullname}>{session.user.full_name}</span>
          </h1>
        ) : (
          <>
            <h1>Welcome to DevDuo</h1>
          </>
        )
      }

      <Box my={5}>
        <h4>Newest Mentors</h4>

        <ListMentor list={limitMentors} />

        <Box display="flex" justifyContent="center" mt={5}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => router.push('/mentors')}
          >
            Explore more
          </Button>
        </Box>
      </Box>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  fullname: {
    color: [theme.palette.primary.main],
  },
}))

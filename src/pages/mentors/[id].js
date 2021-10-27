import { getMentorById } from 'modules/mentor/fetch-mentor'
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getServerSideProps(ctx) {
  return {
    props: {
      details: await getMentorById(process.env.API_URL, ctx.params.id),
    },
  }
}

export default function MentorDetail({ details }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Mentor Detail - DevDuo</title>
        </Head>

        <ContentTemplate>
          <div>Loading...</div>
        </ContentTemplate>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{details.full_name}</title>
      </Head>

      <>
        <pre>{JSON.stringify(details, 0, 2)}</pre>
      </>
    </>
  )
}

import { fetchAllMentor, fetchMentorById } from 'modules/mentor/fetch-mentor'
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  const data = await fetchAllMentor(process.env.API_URL)

  const paths = data.map(item => {
    return {
      params: { id: item.id.toString() },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      details: await fetchMentorById(process.env.API_URL, params.id),
    },
  }
}

export default function MentorDetail({ details }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Detail</title>
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
        <title>{details.fullname}</title>
      </Head>

      <>
        <pre>{JSON.stringify(details, 0, 2)}</pre>
      </>
    </>
  )
}

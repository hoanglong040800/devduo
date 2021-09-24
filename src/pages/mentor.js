import { Box, Button } from '@material-ui/core'
import SidebarMdTemplate from 'common/template/SidebarMdTemplate'
import {
  fetchAllFields,
  fetchAllMentor,
  fetchAllTech,
} from 'modules/mentor/fetch-mentor'
import FilterMentor from 'modules/mentor/FilterMentor'
import ListMentor from 'modules/mentor/ListMentor'
import Head from 'next/head'
import { useState } from 'react'

export async function getStaticProps() {
  return {
    props: {
      mentorList: await fetchAllMentor(process.env.API_URL),
      fieldList: await fetchAllFields(process.env.API_URL),
      techList: await fetchAllTech(process.env.API_URL),
    },
  }
}

export default function MentorPage({ mentorList, fieldList, techList }) {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <>
      <Head>
        <title>Find your mentor | DevDuo</title>
      </Head>

      <Box my={3}>
        <Button
          variant={showSidebar ? 'contained' : 'outlined'}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          Filter
        </Button>
      </Box>

      <SidebarMdTemplate
        showSidebar={showSidebar}
        sidebar={<FilterMentor fieldList={fieldList} techList={techList} />}
      >
        <ListMentor showSidebar={showSidebar} list={mentorList} />
      </SidebarMdTemplate>
    </>
  )
}

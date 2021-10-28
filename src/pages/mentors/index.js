import { Box, Button } from '@material-ui/core'
import SidebarMdTemplate from 'common/template/SidebarMdTemplate'
import { getAllMentor } from 'modules/mentor/fetch-mentors'
import FilterMentor from 'modules/mentor/FilterMentor'
import ListMentor from 'modules/mentor/ListMentor'
import Head from 'next/head'
import { useState } from 'react'

export async function getServerSideProps() {
  return {
    props: {
      mentorList: await getAllMentor(process.env.API_URL),
    },
  }
}

export default function MentorPage({ mentorList }) {
  const [showSidebar, setShowSidebar] = useState(false)

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

      <SidebarMdTemplate showSidebar={showSidebar} sidebar={<FilterMentor />}>
        <ListMentor showSidebar={showSidebar} list={mentorList} />
      </SidebarMdTemplate>
    </>
  )
}

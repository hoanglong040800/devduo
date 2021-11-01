import { Box, Button } from '@material-ui/core'
import SidebarMdTemplate from 'common/template/SidebarMdTemplate'
import { getAllFields, getAllTechnologies } from 'modules/fetch-common'
import { getAllMentor } from 'modules/mentor/fetch-mentors'
import FilterMentor from 'modules/mentor/FilterMentor'
import ListMentor from 'modules/mentor/ListMentor'
import Head from 'next/head'
import { useState } from 'react'

export async function getServerSideProps() {
  return {
    props: {
      allFields: await getAllFields(process.env.API_URL),
      allTechnologies: await getAllTechnologies(process.env.API_URL),
      mentorList: await getAllMentor(process.env.API_URL),
    },
  }
}

export default function MentorPage({ mentorList, allFields, allTechnologies }) {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <Head>
        <title>Find your mentor - DevDuo</title>
      </Head>

      <Box my={3}>
        <Button
          variant={showSidebar ? 'contained' : 'outlined'}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          Toggle filter
        </Button>
      </Box>

      <SidebarMdTemplate
        showSidebar={showSidebar}
        sidebar={
          <FilterMentor
            allFields={allFields}
            allTechnologies={allTechnologies}
          />
        }
      >
        <ListMentor showSidebar={showSidebar} list={mentorList} />
      </SidebarMdTemplate>
    </>
  )
}

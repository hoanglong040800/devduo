import { Box, Button } from '@material-ui/core'
import SidebarMdTemplate from 'common/template/SidebarMdTemplate'
import { getAllFields, getAllTechnologies } from 'modules/fetch-common'
import { getAllMentor } from 'modules/mentor/fetch-mentors'
import FilterMentor from 'modules/mentor/FilterMentor'
import ListMentor from 'modules/mentor/ListMentor'
import Head from 'next/head'
import { useState } from 'react'

export async function getServerSideProps() {
  const apiUrl = process.env.API_URL

  return {
    props: {
      apiUrl,
      allFields: await getAllFields('http://localhost:8000'),
      allTechnologies: await getAllTechnologies('http://localhost:8000'),
      mentorList: await getAllMentor(apiUrl),
    },
  }
}

export default function MentorPage({
  apiUrl,
  mentorList,
  allFields,
  allTechnologies,
}) {
  const [showSidebar, setShowSidebar] = useState(false)
  const [list, setList] = useState(mentorList)

  async function handleFilter(data) {
    console.log('handleFilter', data)
    console.log('URLSearchParams', new URLSearchParams(data).toString())
  }

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
            onFilter={handleFilter}
          />
        }
      >
        <ListMentor showSidebar={showSidebar} list={list} />
      </SidebarMdTemplate>
    </>
  )
}

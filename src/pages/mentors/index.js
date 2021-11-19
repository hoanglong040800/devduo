import { Box, Button } from '@material-ui/core'
import SidebarMdTemplate from 'common/template/SidebarMdTemplate'
import { getAllFields, getAllTechnologies } from 'modules/fetch-common'
import {
  getAllMentor,
  getMentorsByFilter,
  getMentorsBySearch,
} from 'modules/mentor/fetch-mentors'
import FilterMentor from 'modules/mentor/FilterMentor'
import ListMentor from 'modules/mentor/ListMentor'
import Head from 'next/head'
import { useState } from 'react'

export async function getServerSideProps() {
  const apiUrl = process.env.API_URL

  return {
    props: {
      apiUrl,
      allFields: await getAllFields(apiUrl),
      allTechnologies: await getAllTechnologies(apiUrl),
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
    for (let key in data) {
      data[key] === '' && delete data[key]
    }

    const newList = await getMentorsByFilter(
      apiUrl,
      new URLSearchParams(data).toString()
    )
    setList(newList)
  }

  async function handleSearch(data) {
    const newList = await getMentorsBySearch(apiUrl, data.full_name)
    setList(newList)
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
            onSearch={handleSearch}
          />
        }
      >
        <ListMentor showSidebar={showSidebar} list={list} />
      </SidebarMdTemplate>
    </>
  )
}

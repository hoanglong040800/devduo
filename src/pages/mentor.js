import { Box, Button } from '@material-ui/core'
import ContentTemplate from 'common/template/ContentTemplate'
import SidebarMdTemplate from 'common/template/SidebarMdTemplate'
import FilterMentor from 'modules/mentor/FilterMentor'
import ListMentor from 'modules/mentor/ListMentor'
import { useState } from 'react'

export async function getStaticProps() {
  const mentorRes = await fetch(`${process.env.API_URL}/mentor`)
  const mentorData = await mentorRes.json()

  const fieldRes = await fetch(`${process.env.API_URL}/field`)
  const fieldData = await fieldRes.json()

  const techRes = await fetch(`${process.env.API_URL}/technology`)
  const techData = await techRes.json()

  return {
    props: {
      mentorList: mentorData,
      fieldList: fieldData,
      techList: techData,
    },
  }
}

export default function MentorPage({ mentorList, fieldList, techList }) {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <ContentTemplate>
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
    </ContentTemplate>
  )
}

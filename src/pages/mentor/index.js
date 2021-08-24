import { Box, Button } from '@material-ui/core'
import ContentTemplate from 'components/template/ContentTemplate'
import SidebarMdTemplate from 'components/template/SidebarMdTemplate'
import FilterMentor from 'components/modules/mentor/FilterMentor'
import ListMentor from 'components/modules/mentor/ListMentor'
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
        main={<ListMentor showSidebar={showSidebar} list={mentorList} />}
      />
    </ContentTemplate>
  )
}

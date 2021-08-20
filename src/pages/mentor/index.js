import { Box, Button } from '@material-ui/core'
import ContentTemplate from 'components/template/ContentTemplate'
import SidebarMdTemplate from 'components/template/SidebarMdTemplate'
import FilterMentor from 'components/modules/mentor/FilterMentor'
import ListMentor from 'components/modules/mentor/ListMentor'
import { mentorDummy } from 'test/dummy/dummy-data.test'
import { useState } from 'react'

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/mentor`)
  const data = await res.json()

  return {
    props: {
      mentorList: data,
    },
  }
}

export default function MentorPage({mentorList}) {
  const [showSidebar, setShowSidebar] = useState(false)

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
        sidebar={<FilterMentor />}
        main={<ListMentor showSidebar={showSidebar} list={mentorList} />}
      />
    </ContentTemplate>
  )
}

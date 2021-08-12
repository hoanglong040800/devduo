import { Box, Button } from '@material-ui/core'
import ContentTemplate from 'components/template/ContentTemplate'
import SidebarTemplate from 'components/template/SidebarTemplate'
import FilterMentor from 'components/modules/mentor/FilterMentor'
import ListMentor from 'components/modules/mentor/ListMentor'
import { mentorDummy } from 'test/dummy/dummy-data.test'
import { useState } from 'react'

export default function MentorPage() {
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

      <SidebarTemplate
        showSidebar={showSidebar}
        sidebar={<FilterMentor />}
        main={<ListMentor showSidebar={showSidebar} list={mentorDummy} />}
      />
    </ContentTemplate>
  )
}

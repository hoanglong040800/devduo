import ContentTemplate from 'components/template/ContentTemplate'
import SidebarTemplate from 'components/template/SidebarTemplate'
import FilterMentor from 'components/modules/mentor/FilterMentor'
import ListMentor from 'components/modules/mentor/ListMentor'

export default function MentorPage() {
  return (
    <ContentTemplate>
      <SidebarTemplate sidebar={<FilterMentor />} main={<ListMentor />} />
    </ContentTemplate>
  )
}

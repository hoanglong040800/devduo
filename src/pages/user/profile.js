import SidebarSmTemplate from 'components/template/SidebarSmTemplate'
import ContentTemplate from 'components/template/ContentTemplate'
import SidebarUser from 'components/modules/user/SidebarUser'

export default function User() {
  return (
    <ContentTemplate>
      <SidebarSmTemplate
        sidebar={<SidebarUser />}
        main={<h1>main content</h1>}
      />
    </ContentTemplate>
  )
}

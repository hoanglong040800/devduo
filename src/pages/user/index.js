import SidebarSmTemplate from 'components/template/SidebarSmTemplate'
import DefaultLayout from 'components/layout/DefaultLayout'

export default function User() {
  return (
    <DefaultLayout>
      <SidebarSmTemplate
        sidebar={<h1>sidebar</h1>}
        main={<h1>main content</h1>}
      />
    </DefaultLayout>
  )
}

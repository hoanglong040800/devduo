import SidebarSmTemplate from 'components/template/SidebarSmTemplate'
import ContentTemplate from 'components/template/ContentTemplate'
import SidebarUser from 'components/modules/user/SidebarUser'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

export default function User({ children }) {
  const userOption = useSelector(state => state.userOption)
  const router = useRouter()

  return (
    <ContentTemplate>
      <SidebarSmTemplate
        sidebar={
          <SidebarUser
            userOption={userOption}
            clickHandler={name => router.push(`/user/${name}`)}
          />
        }
        main={children}
      />
    </ContentTemplate>
  )
}

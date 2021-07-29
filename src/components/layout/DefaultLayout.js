import { Container } from '@material-ui/core'
import NavBar from 'components/common/NavBar/NavBar'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <NavBar />

      <Container>{children}</Container>
    </div>
  )
}

import { Container } from '@material-ui/core'
import NavBar from 'components/modules/navbar/NavBar'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <NavBar />

      <Container>{children}</Container>
    </div>
  )
}

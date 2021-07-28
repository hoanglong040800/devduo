import { Container } from '@material-ui/core'
import NavBar from '../common/NavBar'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <NavBar />

      <main>
        <Container>{children}</Container>
      </main>
    </div>
  )
}

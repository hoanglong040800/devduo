import NavBar from './NavBar'
import MainTheme from 'assets/theme/MainTheme'

export default function DefaultLayout({ children }) {
  return (
    <MainTheme>
      <NavBar />

      <main>{children}</main>
    </MainTheme>
  )
}

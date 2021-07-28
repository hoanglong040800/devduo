import NavBar from './NavBar'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <NavBar />

      <main>{children}</main>
    </div>
  )
}

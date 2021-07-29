import Link from 'next/link'
import ContentTemplate from 'components/template/ContentTemplate'

export default function Mentor() {
  return (
    <ContentTemplate>
      <h1>Mentor page</h1>

      <ul>
        <li>
          <Link href="/mentor/next-js">NextJS</Link>
        </li>

        <li>
          <Link href="/mentor/react-js">ReactJS</Link>
        </li>

        <li>
          <Link href="/mentor/material-ui">Material UI</Link>
        </li>
      </ul>
    </ContentTemplate>
  )
}

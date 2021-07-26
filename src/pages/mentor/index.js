import Link from 'next/link'

export default function Mentor() {
  return (
    <>
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
    </>
  )
}

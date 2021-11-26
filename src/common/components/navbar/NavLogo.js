import Link from 'next/link'
import Image from 'next/image'

export default function NavLogo() {
  return (
    <Link href="/">
      <a>
        <Image src="/devduo.svg" alt="logo-devduo" height="40" width="40" />
      </a>
    </Link>
  )
}

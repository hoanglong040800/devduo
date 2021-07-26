import { useRouter } from 'next/router'

export default function MentorDetail() {
  const router = useRouter()

  const username = router.query.username

  return <h1>Mentor Detail {username}</h1>
}

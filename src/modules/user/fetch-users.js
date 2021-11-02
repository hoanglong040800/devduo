export async function getUserByEmail(apiUrl, email) {
  const res = await fetch(`${apiUrl}/users?email=${email}`)
  const data = await res.json()

  return data[0]
}

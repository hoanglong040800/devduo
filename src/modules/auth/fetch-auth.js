export async function loginByEmail(apiUrl, email) {
  const body = {
    email: email,
  }

  const res = await fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = res.json()
  return data
}

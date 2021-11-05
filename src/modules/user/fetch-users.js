// ============ GET ============

export async function getUserByEmail(apiUrl, email) {
  const res = await fetch(`${apiUrl}/users?email=${email}`)
  const data = await res.json()

  return data[0]
}

export async function getUserById(apiUrl, id) {
  const res = await fetch(`${apiUrl}/users/${id}`)
  const data = await res.json()

  return data
}

// ============ UPDATE =========

export async function updateUserMoney(apiUrl, id, money) {
  const user = await getUserById(apiUrl, id)
  const body = { money: user.money + money }

  const res = await fetch(`${apiUrl}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()

  return data
}

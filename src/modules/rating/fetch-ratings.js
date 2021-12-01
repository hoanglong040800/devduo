// GET

export async function getAllMentorRatings(apiUrl, mentor_id) {
  const res = await fetch(`${apiUrl}/mentors/${mentor_id}/ratings`)
  const data = await res.json()

  return data
}

// POST
export async function addRating(apiUrl, body) {
  const res = await fetch(`${apiUrl}/ratings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = res.json()

  return data
}

// DELETE
export async function deleteRating(apiUrl, id) {
  const res = await fetch(`${apiUrl}/ratings/${id}`, {
    method: 'DELETE',
  })

  const data = res.json()

  return data
}

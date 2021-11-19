// ========== GET =========

export async function getAllMentor(apiUrl) {
  const res = await fetch(`${apiUrl}/mentors`)
  const data = await res.json()

  return data
}

export async function getLimitMentors(apiUrl, limit = '') {
  try {
    const res = await fetch(
      `${apiUrl}/mentors?_limit=${limit}&_sort=id&_order=desc`
    )
    const data = await res.json()

    if (data.length === 0) return false

    return data
  } catch (e) {
    return false
  }
}

export async function getMentorById(apiUrl, id) {
  try {
    const res = await fetch(`${apiUrl}/mentors/${id}`)
    const data = await res.json()

    if (Object.keys(data).length === 0) return false

    return data
  } catch (e) {
    return false
  }
}

export async function getMentorsByFilter(apiUrl, query) {
  const res = await fetch(`${apiUrl}/mentors/filter?${query}`)
  const data = await res.json()

  return data
}

export async function getMentorsBySearch(apiUrl, query) {
  const res = await fetch(`${apiUrl}/mentors/search?search=${query}`)
  const data = await res.json()

  return data
}

// ========= ADD ===========

// ========= UPDATE =========

export async function updateMentor(apiUrl, id, input) {
  const res = await fetch(`${apiUrl}/mentors/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })

  const data = await res.json()
  return data
}

export async function updateMentorStatus(apiUrl, id, status) {
  const body = { status: status }

  const res = await fetch(`${apiUrl}/mentors/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  return data
}

// ======== DELETE ===========

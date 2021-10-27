// ========== FETCH =========

export async function getAllMentor(apiUrl) {
  const res = await fetch(`${apiUrl}/mentors`)
  const data = await res.json()

  return data
}

export async function getMentorById(apiUrl, id) {
  const res = await fetch(`${apiUrl}/mentors?user_id=${id}`)
  const data = await res.json()

  return data[0]
}

// ========= ADD ===========

// ========= UPDATE =========

// ======== DELETE ===========

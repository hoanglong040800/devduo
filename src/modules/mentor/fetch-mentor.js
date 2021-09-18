export async function fetchAllMentor(apiUrl) {
  const res = await fetch(`${apiUrl}/mentor`)
  const data = await res.json()

  return data
}

export async function fetchMentorByUsername(apiUrl, username) {
  const res = await fetch(`${apiUrl}/mentor?username=${username}`)
  const data = await res.json()

  return data
}

export async function fetchMentorById(apiUrl, id) {
  const res = await fetch(`${apiUrl}/mentor/${id}`)
  const data = await res.json()

  return data
}

export async function fetchAllFields(apiUrl){
  const res = await fetch(`${process.env.API_URL}/field`)
  const data = await res.json()

  return data
}

export async function fetchAllTech(apiUrl){
  const res = await fetch(`${process.env.API_URL}/technology`)
  const data = await res.json()

  return data
}

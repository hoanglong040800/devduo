export async function getAllFields(apiUrl){
  const res = await fetch(`${apiUrl}/fields`)
  const data = await res.json()

  return data
}

export async function getAllTechnologies(apiUrl){
  const res = await fetch(`${apiUrl}/technologies`)
  const data = await res.json()

  return data
}
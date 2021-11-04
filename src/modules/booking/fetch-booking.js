// ========= GET =============

// getAllUserMentorBooking
export async function getAllMentorBooking(apiUrl, user_id) {
  const res = await fetch(
    `${apiUrl}/booking?mentee.id=${user_id}&_sort=id&_order=desc`
  )
  const data = await res.json()

  return data
}

export async function getAllMenteeBooking(apiUrl, user_id) {
  const res = await fetch(
    `${apiUrl}/booking?mentor.id=${user_id}&_sort=id&_order=desc`
  )
  const data = await res.json()

  return data
}

export async function getCurrentBooking(apiUrl, mentee_id, mentor_id) {
  const res = await fetch(
    `${apiUrl}/booking?mentee.id=${mentee_id}&mentor.id=${mentor_id}&status=ongoing&_sort=id&_order=desc`
  )
  const data = await res.json()

  console.log({ data })

  return data[0]
}

// ========= ADD ============

export async function addBooking(apiUrl, data) {
  const res = await fetch(`${apiUrl}/booking`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const resData = await res.json()

  return resData
}

// ============== Update ===========

export async function updateBookingStatus(apiUrl, id, status) {
  
}

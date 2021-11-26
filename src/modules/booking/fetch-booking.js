// ========= GET =============

import { updateMentorStatus } from 'modules/mentor/fetch-mentors'
import { updateUserMoney } from 'modules/user/fetch-users'

// getAllUserMentorBooking
export async function getAllMentorBooking(apiUrl, user_id) {
  const res = await fetch(`${apiUrl}/${user_id}/bookings/mentor`)
  const data = await res.json()

  return data
}

export async function getAllMenteeBooking(apiUrl, user_id) {
  const res = await fetch(`${apiUrl}/${user_id}/bookings/mentee`)
  const data = await res.json()

  return data
}

export async function getCurrentBooking(apiUrl, mentee_id, mentor_id) {
  const res = await fetch(
    `${apiUrl}/bookings/filter?mentor=${mentor_id}&mentee=${mentee_id}&status=ongoing`
  )
  const data = await res.json()

  return data[data.length - 1]
}

// ========= ADD ============

export async function addBooking(apiUrl, data) {
  try {
    const res = await fetch(`${apiUrl}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const booking = await res.json()

    await updateUserMoney(apiUrl, booking.mentee, -data.total_price)
    await updateUserMoney(apiUrl, booking.mentor, data.total_price)
    await updateMentorStatus(apiUrl, data.mentor, false)
    await updateMentorStatus(apiUrl, data.mentee, false)

    return booking
  } catch (e) {
    return false
  }
}

// ============== Update ===========

export async function updateBookingStatus(apiUrl, id, status) {
  try {
    const body = { status: status }

    const res = await fetch(`${apiUrl}/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    let booking = await res.json()

    if (!booking) return false

    switch (status) {
      case 'cancel':
        await updateUserMoney(apiUrl, booking.mentee.id, booking.total_price)
        await updateUserMoney(
          apiUrl,
          booking.mentor.user.id,
          -booking.total_price
        )
        await updateMentorStatus(apiUrl, booking.mentor.id, true)
        await updateMentorStatus(apiUrl, booking.mentee.id, true)
        break

      case 'finish':
        await updateMentorStatus(apiUrl, booking.mentor.id, true)
        await updateMentorStatus(apiUrl, booking.mentee.id, true)

      default:
        null
    }

    return booking
  } catch (e) {
    return false
  }
}

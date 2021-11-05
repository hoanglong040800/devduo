// ========= GET =============

import { updateMentorStatus } from 'modules/mentor/fetch-mentors'
import { updateUserMoney } from 'modules/user/fetch-users'

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

  return data[0]
}

// ========= ADD ============

export async function addBooking(apiUrl, data) {
  try {
    const res = await fetch(`${apiUrl}/booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const booking = await res.json()

    await updateUserMoney(apiUrl, booking.mentee.id, -booking.total_price)
    await updateUserMoney(apiUrl, booking.mentor.id, booking.total_price)
    await updateMentorStatus(apiUrl, booking.mentor.id, false)

    return booking
  } catch (e) {
    return false
  }
}

// ============== Update ===========

export async function updateBookingStatus(apiUrl, id, status) {
  try {
    const body = { status: status }

    const res = await fetch(`${apiUrl}/booking/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const booking = await res.json()

    if (!booking) return false

    switch (status) {
      case 'cancel':
        await updateUserMoney(apiUrl, booking.mentee.id, booking.total_price)
        await updateUserMoney(apiUrl, booking.mentor.id, -booking.total_price)
        await updateMentorStatus(apiUrl, booking.mentor.id, true)
        break

      default:
        null
    }

    return booking
  } catch (e) {
    return false
  }
}

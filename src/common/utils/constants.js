export const userPages = [
  {
    label: 'Booking',
    pathname: '/user/booking/mentor',
  },
  {
    label: 'Edit Profile',
    pathname: '/user/edit-profile',
  },
]

export const bookingPages = [
  {
    label: 'Mentor',
    pathname: '/user/booking/mentor',
  },

  {
    label: 'Mentee',
    pathname: '/user/booking/mentee',
  },
]

export const url = {
  notLogin: '/',
  afterLogin: 'http://localhost:3000/user/booking',
  afterLogout: 'http://localhost:3000',
}

export const userPages = [
  {
    label: 'Booking',
    pathname: '/user/booking',
  },
  {
    label: 'Edit Profile',
    pathname: '/user/edit-profile',
  },
  {
    label: 'Change Password',
    pathname: '/user/change-password',
  },
]

export const url = {
  notLogin: '/',
  afterLogin: 'http://localhost:3000/user/booking',
  afterLogout: 'http://localhost:3000',
}

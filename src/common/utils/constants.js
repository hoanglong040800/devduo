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

// CONTACTS

import {
  Facebook,
  GitHub,
  Language,
  LinkedIn,
  MailOutline,
} from '@material-ui/icons'

export const publicContactsComponents = {
  github: <GitHub style={{ color: '#333' }} />,
  linkedin: <LinkedIn style={{ color: '#0077B5' }} />,
  website: <Language style={{ color: '#333' }} />,
}

export const privateContactsComponent = {
  facebook: <Facebook style={{ color: '#1877F2' }} />,
  email: <MailOutline style={{ color: '#EA4335' }} />,
}

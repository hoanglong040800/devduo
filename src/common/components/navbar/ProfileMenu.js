import { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, IconButton, Button, Menu, MenuItem } from '@material-ui/core'
import { signOut, useSession } from 'next-auth/client'
import { makeStyles } from '@material-ui/styles'
import { url } from 'common/utils/constants'

export default function ProfileMenu() {
  const mui = useStyles()
  const router = useRouter()
  const [session, loading] = useSession()
  const [anchorEl, setAnchorEl] = useState(null)

  function toggleMenu(e) {
    setAnchorEl(e.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <Box display="flex" alignItems="center">
      <div aria-label="booking">
        <Button color="secondary" onClick={() => router.push('/user/booking')}>
          Booking: 5
        </Button>
      </div>

      <div aria-label="profile">
        <Box onClick={toggleMenu} className={mui.imgContainer}>
          <img
            src={session.user.image}
            alt={session.user.name}
            width="100%"
            height="100%"
          />
        </Box>

        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          keepMounted
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MenuItem onClick={() => router.push('/user/booking')}>
            Booking
          </MenuItem>

          <MenuItem onClick={() => router.push('/user/edit-profile')}>
            Edit Profile
          </MenuItem>

          <MenuItem onClick={() => signOut({ callbackUrl: url.afterLogout })}>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </Box>
  )
}

const useStyles = makeStyles({
  imgContainer: {
    width: 40,
    height: 40,
    objectFit: 'contain',
    margin: '0 0 0 10px',
    cursor: 'pointer',

    '& img': {
      borderRadius: 100,
      border: '0.5px solid rgba(0, 0, 0, 0.2)',
    },
  },
})

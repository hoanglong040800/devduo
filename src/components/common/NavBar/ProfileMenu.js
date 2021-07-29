import { useState } from 'react'
import { Box, IconButton, Button, Menu, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

export default function ProfileMenu() {
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
        <Button color="secondary">
          Booking: 5
        </Button>
      </div>

      <div aria-label="profile">
        <IconButton variant="outlined" onClick={toggleMenu}>
          <AccountCircle color="secondary" fontSize="large" />
        </IconButton>

        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          keepMounted
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </Box>
  )
}

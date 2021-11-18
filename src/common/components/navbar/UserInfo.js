import { Box, Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initUserMoney } from 'common/store/userInfoSlice'
import { getUserById } from 'modules/user/fetch-users'
import { useSession } from 'next-auth/client'

export default function UserInfo() {
  const [session, loading] = useSession()
  const userInfo = useSelector(state => state.userInfo)
  const dispatch = useDispatch()

  useEffect(async () => {
    const data = await getUserById(
      'http://localhost:8000',
      session.user.id
    )

    dispatch(initUserMoney(data.money))
  }, [])

  return (
    <Box display="flex" alignItems="center" mr={1}>
      <Typography variant="h6" color="secondary">
        {userInfo.user.money}$
      </Typography>
    </Box>
  )
}

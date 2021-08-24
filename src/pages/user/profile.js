import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeUserOption } from 'store/userOptionSlice'
import User from './index'
import { convertMoney } from 'utils/money-helper'

export default function UserProfile() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeUserOption('profile'))
  }, [])

  return (
    <User>
      <h1>Profile</h1>
      {convertMoney(1545)}
    </User>
  )
}

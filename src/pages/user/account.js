import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeUserOption } from 'store/userOptionSlice'
import User from './index'

export default function UserAccount() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(changeUserOption('account'))
  },[])

  return (
    <User>
      <h1>Account</h1>
    </User>
  )
}

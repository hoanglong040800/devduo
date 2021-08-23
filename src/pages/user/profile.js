import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeUserOption } from 'store/userOptionSlice'
import User from './index'

export default function UserProfile() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(changeUserOption('profile'))
  },[])

  return (
    <User>
      <h1>Profile</h1>
    </User>
  )
}

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeUserOption } from 'store/userOptionSlice'
import User from './index'

export default function UserSettings() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(changeUserOption('settings'))
  },[])

  return (
    <User>
      <h1>Settings</h1>
    </User>
  )
}

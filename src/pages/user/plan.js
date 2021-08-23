import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeUserOption } from 'store/userOptionSlice'
import User from './index'

export default function UserPlan() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(changeUserOption('plan'))
  },[])

  return (
    <User>
      <h1>Plan</h1>
    </User>
  )
}

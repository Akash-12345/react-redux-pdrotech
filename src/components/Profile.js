import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { userSlice } from '../features/user'


const Profile = () => {
    const user=useSelector((state)=>state.user.value)
  return (
    <div>
      <h1>Profile page</h1>
      <p>Name: {user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
    </div>
  )
}
export const {login}=userSlice.actions

export default Profile

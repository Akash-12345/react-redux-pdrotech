import React from 'react'
import { useDispatch } from 'react-redux'
import {login} from "../features/user"
import { logout } from '../features/user'

const Login = () => {
    const dispatch=useDispatch();
  return (
    <div>
      <button
       onClick={()=>{
        dispatch(login({name:"akash",age:20,email:"akashanilk30@gmail.com"}))
       }}>Login</button>
       <button onClick={()=>{
        dispatch(logout())
       }}>Logout</button>
    </div>
  )
}

export default Login

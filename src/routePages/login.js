import React from 'react'
import Navbar from '../component/nav'
import { useSelector } from 'react-redux'


const Login = () => {
  const user = useSelector((state)=>state.user.username )
  const countDis = useSelector((state)=> state.count.num)

  return (
    <div>
        <Navbar/>

        <p>{user}{countDis}</p>
        Login</div>
  )
}

export default Login
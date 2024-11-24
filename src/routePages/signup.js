import React, { useState } from 'react'
import Navbar from '../component/nav'
import { useDispatch ,useSelector  } from 'react-redux'
import { signup } from '../userSlicer/userSlicer'
import { count,decount } from '../counterslice/counterSlice'


const Signup = () => {

  let [user , setUser] = useState('')


  const dispatch = useDispatch()
  const userDisplay= useSelector((state)=> state.user.username)
  const countDis = useSelector((state)=> state.count.num)



  return (
    <div className=''>

      <div>
      <Navbar/>

      </div>
         <label htmlFor="text"> this is the form {userDisplay} </label>
         <p>this is the count :{countDis}</p>
        
         <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} className='outline-double p2' />
         <button onClick={()=>dispatch(signup(user))}> click to save </button>


         <button className='block' onClick={()=>dispatch(count())}>add</button>
         <button className='block' onClick={()=>dispatch(decount())}>decrease</button>


    
     
       
       </div>
  )
}

export default Signup
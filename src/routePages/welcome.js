import React from 'react'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>


        <h1 className='grid justify-center bg-blue-950 rounded-lg text-white text-xl'>HELLO PROGRAMMER ! </h1>
        
        <p className='grid justify-center my-10 text-xl md:text-3xl md:my-20 shadow-2xl font-extrabold  text-blue-600 shadow-slate-700  '>

        Welcome to the home page !

        </p>


        <p className='font-bold text-xl p-4'>why don't i tell you the story of my coding journey in learning web development ....maybe you'll pick inspiration or tips from my journey </p>
        





        <div className='grid justify-center mb-48 mt-10'>
        

        <button className='text-white bg-blue-600 w-28 h-10 rounded-lg animate-bounce'>
            <NavLink to='/INTRO'>start</NavLink>
             </button>

        </div>










    </div>
  )
}

export default Welcome
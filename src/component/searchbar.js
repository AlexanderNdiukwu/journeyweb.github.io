import React from 'react'
import SearchBarPhoto from '../assetImage/searchlogo.png'
import { useState } from 'react'


const Searchbar = () => {

    // let [search , setSearch] = useState();
    let [change , setChange] = useState();


  return (

    <div className='grid '>
    <div className='grid grid-cols-7 gap-1 rounded-lg overflow-hidden'>

        <div className='border col-span-6 text-black ' >
        <input type="text" value={change} onChange={(e)=>setChange(e.target.value)} className='w-full px-1 outline-none object-contain' />
        </div>

       
        <div className='border '>
         <img src={SearchBarPhoto}  className='w-7 border border-red-100 ' alt='this is a search bar ' />

        </div>

        </div>
    </div>
  )
}

export default Searchbar
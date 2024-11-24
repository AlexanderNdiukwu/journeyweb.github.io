import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const MainFooter = ({ indexChange }) => {
 
  const [currentIndex, setCurrentIndex] = useState(indexChange);

  const details = [
    'INTRO',
    'INTRODUCTION',
    'SETTING UP VSCODE',
    'LEARNING BASIS OF HTML',
    'LEARNING CSS',
    'LEARN RESPONSIVE CSS',
    'LEARNING TAILWIND',
    'LEARN BASIS OF JAVASCRIPT(JS)',
    'PROJECTS ON HTML,TAILWIND AND JS',
    'START BUILDING PROJECTS',
    'LEARN REACT',
    'LEARN API',
    'PROJECTS ON REACTS',
    'START BUILDING PROJECTS ON REACTS',
    'YOUTUBE LINKS',
    
  ];



  useEffect(()=>{
    setCurrentIndex(indexChange)
  },[indexChange])

  function handlePrev(){

    if(currentIndex > 0){

    setCurrentIndex (currentIndex => currentIndex - 1)

    }
  }
  function handleNext(){
    if(currentIndex <= details.length){
    setCurrentIndex (currentIndex => currentIndex + 1)

    }
  }
  
  return (
    <div className="grid justify-center mt-10">
      <div className='grid grid-cols-3 gap-2 text-center items-center'>
      <NavLink onClick={handlePrev}
       to={details[currentIndex-1] } 
       disabled={currentIndex === 0}  
        className={`bg-black text-white px-4 py-2 rounded-md 
          ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`} 
            >prev</NavLink>

      <div>{currentIndex}</div>

      <NavLink onClick={handleNext} 
      to={details[currentIndex+1]}  
      disabled={currentIndex === details.length}   
      className={`bg-black text-white px-4 py-2 rounded-md 
        ${currentIndex === details.length ? "opacity-50 cursor-not-allowed" : ""
            }`}
            >next</NavLink>

      </div>
    
    </div>
  );
};

export default MainFooter;




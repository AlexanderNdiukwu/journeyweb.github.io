import React from 'react'
import svscode from '../assetImage/svscodeimages/svscode.png'
import svscode1 from '../assetImage/svscodeimages/svscode1.png'
import svscode2 from '../assetImage/svscodeimages/svscode2.png'
import svscode3 from '../assetImage/svscodeimages/svscode3.png'
import svscode4 from '../assetImage/svscodeimages/svscode4.png'
import svscodedetails from '../assetImage/svscodeimages/vscodedetails.png'


const Svscode = () => {
  return (
    <div className='list-decimal' >
       <div>
        <h1 className='grid justify-center bg-blue-950 mb-10 rounded-md text-white font-bold'>
                    Why I Used VS Code

        </h1>
       

        <div className='px-2 grid justify-center '>
                  <p className='font-bold'>
                   <b>well </b> , Here’s a detailed guide on setting up Visual Studio Code (VS Code) for your web development journey, why it’s an excellent choice, and everything you’ll need to make your experience smooth and efficient.

                    VS Code is one of the best editors for web development because:
                 

                  </p>

                    <ul className='m-5'>
                                    <li>   1. It’s free and open-source.</li>
                                    <li>   2. It’s highly customizable.</li>
                                    <li>   3. It has a large community of developers who contribute to its extensions.</li>
                                    <li>   4. Customizable: Extensions, themes, and settings can tailor it to your workflow.</li>
                                    <li>  5.  Built-in Git: Manage version control directly in the editor.</li>
                                    <li>  6.  Lightweight and Fast: It doesn’t hog your system resources.</li>
                                    <li>  7.  Debugging Tools: Debug JavaScript, React, and more with ease.</li>
                    </ul>

                

                    <p className='text-xl font-bold'>you dont need to know what that means , just install it and you will see .</p>
                    <p>images of you dont need to know ask question later 

                    </p>

                    <hr />

        </div>
      
        <div className='p-6'>
          <img src={svscode} alt="look at the details" className='w-full h-94 '/>
          <h1 className='grid justify-center font-extrabold'>this is how vs code looks like </h1>
        </div>

       </div>



       <div>
    <h1 className='font-extrabold grid justify-center bg-slate-950 text-white rounded-lg mb-6'>

       Step-by-Step Setup for VS Code
    </h1><b>1.</b>
 Download and Install VS Code
Download VS Code from the official website by clicking this link to take you directly to the download page. Follow the installation instructions for your operating system.
Follow the installation process for your operating system (Windows, macOS, or Linux).

       </div>


       <div className='font-extrabold grid justify-center m-5'>
        installed already ????? congratulation !!!!! you are now a developer
       </div>
       <hr />
       <div className='m-7'>
    <h1 className='md:text-2xl text-sm grid justify-center md:font-extrabold'>THESE ARE SOME OF THE EXTENSION I USED  </h1>
  <div className='shadow-xl m-10 '>
    <img src={svscode1} alt="" className='w-full h-94' />
  </div>

    </div>   
    
     <div className='m-7'>
    <h1 className='md:text-2xl text-sm grid justify-center md:font-extrabold'>SETTINGS TO ENABLE FOR BETTER CODE  </h1>
  <div className='shadow-xl m-10 '>
    <img src={svscode2} alt="" className='w-full h-94' />
  </div>

    </div>

    <div className='m-7'>
    <h1 className='md:text-2xl text-xs grid justify-center md:font-extrabold'>RUNNING YOUR CODE LIVE ON YOUR LOCAL BROWSER  </h1>
  <div className='shadow-xl m-10 '>
    <img src={svscode3} alt="" className='w-full h-94' />
  </div>

    </div>
    <div className='m-7'>
    <h1 className='md:text-2xl text-xs grid justify-center md:font-extrabold'>YOU NEED TO INSTALL NODE TO RUN YOUR CODE (JS) .</h1>
  <div className='shadow-xl m-10 '>
    <img src={svscode4} alt="" className='w-full h-94' />
  </div>

    </div>
    <div className=' grid grid-cols-3 relative h-full m-2  '>
      <div className='col-span-2 lg:col-span-2 grid justify-start lg:text-sm text-[6px] font-extrabold h-10 pt-1'>
      <p className='mt-1 md:mt-0 lg:mt-7'> <b className='text-red-500 md:text-base'>i.</b> THIS IS WHERE YOUR FILES WILL BE LOCATED AT.</p>
      <p className='md:mt-0' > <b className='text-red-500 md:text-base' >ii.</b> SEARCH FOR WORDS PRESENT ON YOUR WORKPLACE  .</p>
      <p className='md:mt-0'> <b className='text-red-500 md:text-base'>iii.</b> GIT WORKPLACE.</p>
      <p className='mt-2 md:mt-0 md:p-0 lg:mt-5 '> <b className='text-red-500 md:text-base'>iv.</b> WHERE YOU CAN GET YOUR EXTENSIONS .</p>
      <p className='text-red-500 text-[2px] md:text-xs md:hidden'> FROM V-VI ARE EXTENSIONS I NEEDED </p>

      <p > <b className='text-red-500 md:text-base'>v.</b> A PYTHON EXTENTION.</p>
      <p className='mt-4 md:mt-0 lg:mt-24'> <b className='text-red-500 md:text-base'>vi.</b> A MOBILE VIEW EXTENTION .</p>
      <p className='mt-2 md:mt-0 lg:mt-16'> <b className='text-red-500 md:text-base'>vii.</b> YOUR PROFILE .</p>
      <p className=' md:mt-0 lg:mt-0 '> <b className='text-red-500 md:text-base'>vii.</b> YOUR SETTING .</p>

 

       </div>
  <div className='shadow-xl  col-span-1 lg:col-span-1'>
    <img src={svscodedetails} alt="" className='w-full' />
  </div>

    </div>

      <p className='mt-5 font-bold text-xs md:text-sm grid justify-center '> 
        
        <b>NOTE: </b>  YOU CAN GET MORE RESOURSES?EXTENSIONS/ANY IDE(integrated developer environment) IF YOU WANT TO . IT IS UP TO YOU .</p>



       <div>
        
       </div>






    </div>
  )
}

export default Svscode
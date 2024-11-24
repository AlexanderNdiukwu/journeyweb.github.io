import html from '../assetImage/html images/html.png'
import htmlDet from '../assetImage/html images/htmlDet.png'
import html2 from '../assetImage/html images/html2.png'
import html3 from '../assetImage/html images/html3.png'
import html4 from '../assetImage/html images/html4.png'
import html5 from '../assetImage/html images/html5.png'
import html6 from '../assetImage/html images/html6.png'
import practice from '../assetImage/html images/pratice.png'
import React from 'react'


const Lboh = () => {
    return ( 
    <div>

        <h1 className="grid justify-center border mb-4 bg-blue-950 rounded-md text-white font-serif  text-xl font-bold">LEARNING BASIS OF HTML</h1>
            <p className=''>
                HTML stands for HyperText Markup Language. It is used to create web pages.
            </p>

        <div>
            <img src={html} alt="hdhjd" className="shadow-lg my-6 w-full  shadow-slate-600"  />
        </div>

        <div>

            <p className='text-xl grid justify-center'>
        Building the Foundation: Understanding HTML

            </p>

     <div className='m-3'>

When I began my web development journey, HTML was the first thing I learned—and for good reason. HTML (HyperText Markup Language) is the foundation of every website. Without it, the web would just be a blank screen! Think of HTML as the skeleton of a website. It organizes content and gives it structure.

Let’s dive into what makes HTML so special.
     </div>


        </div>



        <div>
            

        <div>
            <img src={htmlDet} alt="hdhjd" className="shadow-lg my-6 w-full  shadow-slate-600"  />
        </div>
        

        </div>

        <div>
            <img src={html2} alt="hdhjd" className="shadow-lg my-6 w-full  shadow-slate-600"  />
        </div>

        <div>
            <img src={html3} alt="hdhjd" className="shadow-lg my-6 w-full  shadow-slate-600"  />
        </div>

        <div>
            <img src={html4} alt="hdhjd" className="shadow-lg my-6 w-full  shadow-slate-600"  />
        </div>

        <div>
            <img src={html5} alt="hdhjd" className="shadow-lg my-6 w-full shadow-slate-600"  />
        </div>

        <div>
            <img src={html6} alt="hdhjd" className="shadow-lg my-6 w-full shadow-slate-600"  />
        </div>
    <div>
        <div className='m-20'>
        <h1 className='grid justify-center text-2xl font-bold shadow-inner  mt-20'>practice </h1>
        </div>
        <h1>    Making It Fun : Creating Your First HTML Page</h1>
        <div>
            <img src={practice} alt="hdhjd" className="shadow-lg my-6 w-full  shadow-slate-600"  />
        </div>
        
    </div>

    <div className='font-bold'>

        <p>
    
        Learning HTML is like playing with Lego bricks. Each tag is a block, and when you combine them, you build something unique. The more you experiment, the better you’ll get. So start simple, and let your creativity flow.
        </p>
    <p>Let me know if this works, or if you'd like to tweak it before moving on! 😊</p>
    </div>



       
       
    </div>  );
}
 
export default Lboh;
import React from 'react'
import css1 from '../assetImage/css images/css1.png'
import css2 from '../assetImage/css images/css2.png'
import css3 from '../assetImage/css images/css3.png'
import css4 from '../assetImage/css images/css4.png'
import css5 from '../assetImage/css images/css5.png'
import css6 from '../assetImage/css images/css6.png'
import practicecss from '../assetImage/css images/practicecss.png'

const Lcss = () => {
  return (
    <div className='font-bold'>
        <h1 className="grid justify-center border mb-4 bg-blue-950 rounded-md text-white font-serif  text-xl font-bold" >LEARNING CSS</h1>
        <div className='m-4'>
            <p>
            Once I understood HTML, I felt like I had built a solid house—but something was missing. My house had no paint, no decorations, and no furniture. That’s where CSS (Cascading Style Sheets) comes in—it’s the interior designer of the web. CSS adds colors, styles, and layouts that transform a plain page into something beautiful and functional.
            </p>
        </div>
       
            <div>"Adding Style: The Power of CSS"</div>
        <div>
            <img src={css1} alt="hdhjd" className="shadow-lg my-6 w-full border border-red-200 shadow-slate-600"  />
        </div>


        <div>
            <div className='grid justify-center text-xl mb-3'>  What is CSS?</div>
            <p>
          
            CSS stands for Cascading Style Sheets. It’s the language used to style an HTML document. While HTML structures the content, CSS defines how it looks. Think of it as the clothes you put on your webpage—it expresses its personality.
            </p>
        </div>
        <div>
            <img src={css2} alt="hdhjd" className="shadow-lg my-6 p-6 w-full shadow-slate-600"  />
        </div>
        <div>
            <img src={css3} alt="hdhjd" className="shadow-lg my-6 p-6 w-full shadow-slate-600"  />
        </div>
        <div>
            <img src={css4} alt="hdhjd" className="shadow-lg my-6 p-6 w-full shadow-slate-600"  />
        </div>
        <div>
            <img src={css5} alt="hdhjd" className="shadow-lg my-6 p-6 w-full shadow-slate-600"  />
        </div>
        <div>
            <img src={css6} alt="hdhjd" className="shadow-lg my-6 p-6 w-full shadow-slate-600"  />
        </div>



        <div>
            <h1>
            Making It Fun
            </h1>
            <p className='text-2xl grid justify-center shadow-inner shadow-slate-600'>Pratice</p>
            <div>
            <img src={practicecss} alt="hdhjd" className="shadow-lg my-6 p-6 w-full shadow-slate-600"  />
            </div>
            <p>
           
Learning CSS is like experimenting with fashion—you try different looks until you find something that works for you. Keep tweaking, keep learning, and soon, you’ll create designs that amaze everyone!


            </p>
        </div>

      

    </div>
  )
}

export default Lcss
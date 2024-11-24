import React from 'react'
import lrc1  from '../assetImage/irc images/lrc1.png'
import lrc2  from '../assetImage/irc images/lrc2.png'
import lrc3  from '../assetImage/irc images/lrc3.png'
import lrc4  from '../assetImage/irc images/lrc4.png'
import praticelrc  from '../assetImage/irc images/practicelrc.png'

const LreponsC = () => {
  return (
    <div className='font-bold'>
        <h1 className="grid justify-center border mb-4 bg-blue-950 rounded-md text-white font-serif  text-xl font-bold">LEARN RESPONSIVE CSS</h1>
        <p>When I first created a webpage, I was thrilled—until I opened it on my phone. It looked like a jumbled mess. That’s when I realized the importance of responsive design. The web isn’t just for desktops anymore. It’s everywhere—on phones, tablets, and even TVs. Responsive CSS ensures your design adapts beautifully to all screen sizes.</p>

        <div>
            <p>What is Responsive Design?
            Responsive design is about making your website look great on any device. Whether it’s a 27-inch monitor or a 5-inch phone, the content should flow naturally, without cutting off or looking awkward.</p>
        </div>

        <div>
            <img src={lrc1} alt="hdhjd" className="shadow-lg my-6 w-full  shadow-slate-600"  />
        </div>
        <div>
            <img src={lrc3} alt="hdhjd" className="shadow-lg my-6 w-full  shadow-slate-600"  />
        </div>
        <div>
            <img src={lrc4} alt="hdhjd" className="shadow-lg my-6 w-full  shadow-slate-600"  />
        </div>
        <div>
            <img src={lrc2} alt="hdhjd" className="shadow-lg my-6 w-full  shadow-slate-600"  />
        </div>
    
        <div>
          <p className='grid justify-center'>Practice </p>
            <h1>
            Making It Fun
            </h1>
            <div>
            <img src={praticelrc} alt="hdhjd" className="shadow-lg my-6 w-full  shadow-slate-600"  />
             </div>
            <p>
          
Responsive CSS is like solving puzzles—you try different combinations until everything fits perfectly, no matter the screen size. Experiment, make mistakes, and celebrate when your site looks amazing on every device!


            </p>
        </div>
    </div>
  )
}

export default LreponsC
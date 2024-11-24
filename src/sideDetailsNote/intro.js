import '../App.css'
import Photo from '../assetImage/introPhoto.jpeg'

const INTRO = () => {
    return ( <div className="font-serif font-medium text-sm md:text-xl">
         <h1 className="grid justify-center border mb-4 bg-blue-950 rounded-md text-white ">INTRO</h1>

         <p className='grid justify-center mb-3 bg-slate-200 font-bold'>"Welcome to my Coding Journey!"</p>

         <div className='md:grid  md:grid-cols-3 mb-10  '>

        <p className=' col-span-2 grid items-center  shadow-inner '>Kickstarting your programming adventure is easier than you think! In this section, you'll discover why coding is an incredible skill, how it shapes the digital world, and what exciting things you'll be building. Lets set the tone for an enjoyable and rewarding experience!</p>
        <div className='w-full rounded-lg'>
            <img src={Photo} alt="this is structure of a coding jorney " className='w-96 h-full rounded-lg ' />
        </div>

         </div>
            <p className='grid justify-center mb-11 text-lg font-bold bg-slate-300'>why use this website as a guideline to your coding journey?</p>
         <p>
My name is Ndiukwu Chukwuemeka Paul, and I am a web developer from Nigeria. I have recently completed my training in React and felt inspired to undertake a project aimed at assisting young individuals who are just starting their journey in web development.

The goal of this initiative is to clarify the essential do’s and don’ts of web development for beginners. I want to help newcomers navigate the complexities of the field, ensuring they have a clear path forward without confusion. Moreover, I aim to make this learning experience enjoyable and engaging.

I believe that with the right guidance, aspiring developers can thrive in this dynamic industry. I'm excited to share this project and support others on their web development journey!

Best regards,  
Ndiukwu Chukwuemeka Paul
 </p> 
     
        <p className='mt-11'>when we are done , you will understand web DEVELOPMENT and you will be able to build your own projects .</p>


    </div> );
}
 
export default INTRO;
import HcPhoto from '../assetImage/HCJPhoto.jpeg'
import seriesPhoto from '../assetImage/introducPhoto.jpeg'




const Introduction = () => {
    return ( 
    <div className='font-serif font-bold'>
        <div className="grid justify-center border mb-4 bg-blue-950 rounded-md text-white font-serif font-medium text-xl ">

        <h1 className="">How I Started My Web Development Journey</h1>
        </div>
                <h1 className='grid justify-center shadow-xl '>is web development complicated ? you may ask </h1>

        <div className=' grid mt-3 md:float-right justify-center  mb-10' >
                <img src={seriesPhoto} alt="confused developer" className=' w-64 object-contain' />
        </div>

        <div className='mt-10 pt-6'>
                    <p className=' '>
                            Web development isn’t as complicated as it seems when you have a clear path. Through this website, I’ll guide you step by step:

                                Learn the Basics: Start with HTML and CSS to build the foundation.
                                Enhance Your Designs: Use Tailwind CSS to create modern and responsive websites quickly.
                                Add Interactivity: With JavaScript, make your websites dynamic.
                                Go Further with React: Learn to build fully functional apps
  
                    </p>
        </div>


        <div className=" justify-center mt-10 mb-12 ">

                    <p className='col-span-3 justify'>
                                When I first got interested in web development, I didnt know where to start. The internet was full of resources, but most were confusing or covered things I didnt need at the time.

                                I remember spending hours watching tutorials that didnt explain the basics or diving into topics like advanced frameworks before I even knew HTML properly. It felt like I was stuck in a loop, learning but not progressing.

                                Thats when I decided to simplify everything. I focused on the essentials, practiced by building small projects, and avoided distractions. This approach worked for me, and now I want to share it with you.

                    </p>


        </div>
        <div className='grid justify-center m-6'>
        <img src={HcPhoto} alt="series " />
          

        </div>
        <div>
        But this isn’t just about coding. It’s also about building projects that matter, understanding why you’re learning, and gaining confidence in your skills. I’ve included practical steps, fun challenges, and real-life examples to make learning exciting.

So, are you ready to start your journey? Let’s dive in together!


        </div>





       
    </div> );
}
 
export default Introduction;
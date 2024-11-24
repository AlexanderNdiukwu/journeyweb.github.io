import { Outlet } from 'react-router-dom';
import '../App.css';
import MainFooter from '../component/mainFooter';
import Navbar from '../component/nav';
import Sidebar from '../component/sideBar';
import { createContext,useState } from 'react';






export let getIndex = createContext()






function App() {
  let [disIndex , setDisIndex] = useState(0)


 
  return (
    <div className='h-screen flex flex-col select-none '>
    <div  className="sticky top-0 z-10">
    <Navbar />
    </div>

    <div className='flex flex-1 overflow-hidden'>
    <div className='hidden md:block w-1/4 bg-red-200 text-white p-4 '>
  
    <getIndex.Provider value={{setDisIndex}}>
    <Sidebar   />

    </getIndex.Provider>
  </div>

  <div className='flex-1 overflow-y-auto p-4 gap-4 border-l-4 border-x-slate-600 '>
  


 <Outlet/>


      

<MainFooter indexChange = {disIndex} />
    </div>


    </div>




  
    


 </div>
  );


}



export default App;

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { getIndex } from "../routePages/App";




const SideDetails = () => {
  
  let {setDisIndex}  = useContext(getIndex)



  function handle(index){
   setDisIndex(index)
 
 
   }


 

  let details = ['INTRO','INTRODUCTION','SETTING UP VSCODE','LEARNING BASIS OF HTML','LEARNING CSS','LEARN RESPONSIVE CSS','LEARNING TAILWIND','LEARN BASIS OF JAVASCRIPT(JS)','PROJECTS ON HTML,TAILWIND AND JS','START BUILDING PROJECTS','LEARN REACT','LEARN API','PROJECTS ON REACTS', 'START BUILDING PROJECTS ON REACTS','YOUTUBE LINKS']

    return ( 


      <div >
 
        
 
  {details.map((x,index)=>
    <NavLink key={index} className={({ isActive }) =>`detailstyles ${isActive ? "bg-blue-700 text-white font-bold" : "text-gray-700"}`
    }  onClick={()=>handle(index)}   to={`/${x}`} >{x}</NavLink>

   
  )}


</div>

     );
}
 
export default SideDetails;
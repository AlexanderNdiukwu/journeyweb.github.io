
import {NavLink } from "react-router-dom";

const Navbar = () => {
    return (    
        <div className="grid md:grid-cols-2 bg-slate-300 p-3 w-full ">

            <div className="grid justify-center md:justify-start">
                <h1 className="text-blue-600 mb-3 text-md font-bold">ALEXANDER'S LEARNING PROCESS WITH REACT-TAILWIND </h1>
            </div>
            
            <div className="bg-red-200 border rounded-lg">
                <ul className="grid grid-cols-4 mb-0 h-full items-center rounded-sm ">

                    <NavLink to='/' className="li text-md pl-5 ">HOME</NavLink>
                    {/* <NavLink to='/contact' className="li block md:hidden">MENU-BAR</NavLink> */}
                    <NavLink to='/contact' className="li">CONTACTS</NavLink>
                    <NavLink to='/signup' className="li">SIGNUP</NavLink>
                    <NavLink to='/login' className="li">LOGIN</NavLink>
                </ul>
            </div>




        </div>


     );
}
 
export default Navbar;
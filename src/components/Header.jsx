import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid';
import '../assets/Question.css';
const Header = () => {
    const [open, setOpen] =useState(false)
    return (

       <div className={`header text-2xl block ease-in duration-500 ${open ? 'mb-[0px]' : 'mb-[20px]'}`}>
         <div className='md:hidden'>
            {
                open ? <XCircleIcon onClick={()=>setOpen(!open)} className='h-10 w-20'/> :<Bars3Icon onClick={()=>setOpen(!open)} className='h-10 w-20'/>
            }       
        </div>
        <div className={`md:static md:flex justify-between md:py-4 absolute md:bg-purple-500 bg-black text-white ease-in duration-500 px-20 py-10 mb-20  ${open ? 'left-[0px]' : 'left-[-700px]'}`}>
        <div>
        <h1 className="text-white lg:text-3xl md:text-2xl md:block hidden  font-bold">
            OPTIMIZED BRAIN
        </h1>
        </div>
           <div>
            <NavLink onClick={({isActive})=>isActive ? 'active' : undefined} className='block md:inline-block mr-5' to='/home'>Home</NavLink>
           <NavLink className='block md:inline-block mr-5' to='/quiz'>Quiz</NavLink>
            <NavLink className='sm:block  md:inline-block mr-5' to='/quizChart'>Quiz Chart</NavLink>
            <NavLink className='block  md:inline-block mr-5' to='/blog'>Blogs</NavLink>
           </div>
        </div>
       </div>
    );
};

export default Header;
import React from 'react'
import logo from '../../public/assets/logo.png'
import { format } from "date-fns";
function Header() {
    return (
        <div className='grid justify-center md:mt-5'>
            <img src={logo} alt="" />
            <p className='text-center my-3'>Journalism Without Fear or Favour</p>
            <p className='text-center'>{format(new Date(),"EEEE , MMMM MM ,yyyy" )}</p>
        </div>
    )
}

export default Header

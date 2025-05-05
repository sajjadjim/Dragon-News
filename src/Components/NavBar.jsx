import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../public/assets/user.png'
import { AuthContext } from '../Provider/AUthProvider';
const NavBar = () => {
    const {user} = use(AuthContext)
    return (
        <div className='flex items-center justify-between w-10/12 mx-auto'>
           <div className=''>{user && user.email}</div>
           <div className='nav flex gap-3 text-[#706F6F]'>
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/about'>About</NavLink>
           <NavLink to='/career'>Career</NavLink>
           </div>
           <div className='flex gap-3'> <img src={logo} alt="" /><Link to='/auth/login' className='btn btn-primary text-white '>Login</Link></div>
        </div>
    );
};
export default NavBar;
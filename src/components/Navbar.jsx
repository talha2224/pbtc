import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-[#121212] px-5 py-3 text-[#fff]'>

      <div className='flex items-center gap-x-2'>
        <img src={Logo} alt="" className='h-10' />
        <p className='text-lg font-semibold'>PBTC</p>
      </div>

      <div className='items-center gap-x-4 lg:flex hidden'>
        <Link to={"/"} className='hover:text-[#C6C4C4] cursor-pointer text-sm'>Home Page</Link>
        <Link to={"/"} className='hover:text-[#C6C4C4] cursor-pointer text-sm'>Product & Store</Link>
        <Link to={"/packages"} className='hover:text-[#C6C4C4] cursor-pointer text-sm'>Packages</Link>
        <Link to={"/membership"} className='hover:text-[#C6C4C4] cursor-pointer text-sm'>Membership</Link>
        <Link to={"/team"} className='hover:text-[#C6C4C4] cursor-pointer text-sm'>Our Team & Ministry</Link>
        <Link to={"/events"} className='hover:text-[#C6C4C4] cursor-pointer text-sm'>Events & Timeline</Link>
        <Link to={"/contact"} className='hover:text-[#C6C4C4] cursor-pointer text-sm'>Contact us</Link>
      </div>

      <button className='bg-[#E67E22] px-4 py-2 rounded-[2rem] text-sm'>
        <Link to={"/login"}>Sign in</Link>
      </button>


    </div>
  )
}

export default Navbar

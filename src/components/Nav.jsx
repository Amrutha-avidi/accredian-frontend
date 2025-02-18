import React from 'react'
import logo from '../assets/logo.png'
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";



const Nav = () => {
    return (
        <div className='flex flex-row justify-between items-center'>
            <div className='flex gap-7 items-center '>
                <img src={logo} className='w-[125px]'
                    alt='logo' />
                <button className='hidden md:flex md:gap-2 md:items-center md:text-white md:bg-[#1A73E8] md:rounded-md md:px-4 md:py-2'>Courses <FaAngleDown /></button>
            </div>
            <div className='flex flex-row items-center gap-4 md:hidden'>
                <button className='flex gap-2 items-center text-white bg-[#1A73E8] rounded-md px-4 py-2'>Explore <FaAngleRight /></button>
                <RxHamburgerMenu className='text-2xl' />
            </div>
            <ul className='hidden md:flex md:gap-9 md:items-center md:font-medium'>
                <li className='text-[#1A202C] text-[14.75px]'>Refer & Earn</li>
                <li className='text-[#1A202C] text-[14.75px]'>Resources</li>
                <li className='text-[#1A202C]  text-[14.75px]'> About us</li>
                <button className='items-center text-black bg-[#94A3B833] rounded-md px-4 py-2'>Login</button>
                <button className=' items-center text-white bg-[#1A73E8] rounded-md px-4 py-2'>Try for free </button>
            </ul>
        </div>
    )
}

export default Nav
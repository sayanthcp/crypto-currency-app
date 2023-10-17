import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'

const NavBar = () => {
//state
const [nav,setNav] = useState(false)
const {user,logOut} = UserAuth()
const navigate = useNavigate()

//signout
const handleSignOut = async () => {
    try {
        await logOut()
        navigate('/')

    } catch(e) {
        console.log(e.message);
    }
}

//nav Handler
const handleNav = () => {
    setNav(!nav)
}


  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold'>
        <Link to='/'>
            <h1 className='text-2xl'>Crypto</h1>
        </Link>
        <div className='hidden md:block'>
            <ThemeToggle />
        </div>
        {user?.email ? (
            <div>
                <Link className='p-4' to='/account'>Account</Link>
                <button onClick={handleSignOut}>Sign out</button>
            </div>
        ) : (
            <div className='hidden md:block'>
            <Link to='/signin' className='p-4 hover:text-accent'>Sign In</Link>
            <Link to='/signup' className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign Up</Link>
        </div>
        )}

        {/* Menu Icon */}
        <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
           {nav ? <AiOutlineClose size={25} /> :  <AiOutlineMenu size={25} />}
        </div>

        {/* Mobile Menu */}
        <div className={
            nav ? 'md:hidden absolute left-0 top-20 flex flex-col justify-between items-center w-full h-[90%] bg-primary ease-in duration-300 z-10' 
                : 'absolute left-[-100%] top-20 flex flex-col justify-between items-center w-full h-[90%] ease-in duration-300'
         }>
            <ul className='w-full p-4'>
                <li onClick={handleNav} className='border-b p-6'>
                    <Link to='/'>Home</Link>
                </li>
                <li onClick={handleNav} className='border-b p-6'>
                    <Link to='/account'>Account</Link>
                </li>
                <li className='p-6'>
                    <ThemeToggle />
                </li>
            </ul>
            {user?.email ? (
                <div>
                    <Link className='p-4' to='/account'>Account</Link>
                <button onClick={handleSignOut}>Sign out</button>
                </div>
            ) : 
            (
                <div className='flex flex-col w-full p-4'>
                <Link to='/signin'>
                    <button onClick={handleNav} className='w-full my-2 p-3 text-primary border border-secondary rounded-2xl shadow-lg'>Sign In</button>
                </Link>
                <Link to='/signup'>
                    <button onClick={handleNav} className='w-full my-2 p-3 text-btnText bg-button rounded-2xl shadow-lg '>Sign Up</button>
                </Link>
                </div>
            )}
        </div>
      
    </div>
  )
}

export default NavBar

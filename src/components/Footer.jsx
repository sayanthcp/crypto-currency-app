import React, { useState } from 'react'
import {FaFacebookF,FaTwitter,FaGithub} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai' 
import ThemeToggle from './ThemeToggle'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const {signUp} = UserAuth()
  const navigate = useNavigate()

  //signup function
  const handleSignUp = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signUp(email)
      navigate('/account')

    }catch(e) {
      setError(e.message)
    }

  }
  return (
    <div className='rounded-div mt-8 pt-8 text-primary'>
      <div className='grid md:grid-cols-2'>
        <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
          <div>
            <h2 className='font-bold'>Support</h2>
              <ul>
                <li className='text-sm py-2'>Help Center</li>
                <li className='text-sm py-2'>Contact Us</li>
                <li className='text-sm py-2'>API Status</li>
                <li className='text-sm py-2'>Documentation</li>
              </ul>
          </div>
          <div>
            <h2 className='font-bold'>Info</h2>
            <ul>
                <li className='text-sm py-2'>About Us</li>
                <li className='text-sm py-2'>Careers</li>
                <li className='text-sm py-2'>Invest</li>
                <li className='text-sm py-2'>Legal</li>
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[300px] py-4 relative'>
              <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4'>
                <ThemeToggle />
              </div>
              <p className='text-center md:text-right'>Sign up for crypto news</p>
              <div className='py-4'>
                <form onSubmit={handleSignUp}>
                  <input onChange={(e)=>setEmail(e.target.value)} className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-[200px]' type="text" placeholder='Enter Your Email' />
                  {error ? <p className='text-red-500'>Invalid address</p> : null}
                  <button className='bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl md:w-auto my-2'>Sign Up</button>
                </form>
              </div>
              <div className='flex justify-between py-4 text-accent'>
                <FaFacebookF />
                <FaTwitter />
                <FaGithub />
                <AiOutlineInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center py-4'>Powered by Coin Gecko</p>
    </div>
  )
}

export default Footer

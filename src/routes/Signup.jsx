import React, { useState } from 'react'
import {AiOutlineMail,AiFillLock} from 'react-icons/ai'
import { Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {signUp} = UserAuth()


  //handle sumbit
  const handleSumbit = async (e) => {
    e.preventDefault()
    setError('')
    try{
      await signUp(email, password)
      navigate('/account')
    }catch(e){
      setError(e.message)

    }
  }

  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-2xl font-bold'>Sign Up</h1>
        
        <form onSubmit={handleSumbit}>
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input 
              onChange={(e)=>setEmail(e.target.value)}
              className='w-full p-2 bg-primary border border-input rounded-2xl' type="Email" />
              {error ? <p className='bg-red-500 text-center p-2 rounded-xl my-2'>Invalid email address</p> : null}
              <AiOutlineMail className='absolute right-2 top-3 text-gray-400'/>
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input 
              onChange={(e)=>setPassword(e.target.value)}
              className='w-full p-2 bg-primary border border-input rounded-2xl' type="password" />
               {error ? <p className='bg-red-500 text-center p-2 rounded-xl my-2'>invalid password !</p> : null}
              <AiFillLock className='absolute right-2 top-3 text-gray-400'/>
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign up</button>
        </form>
        
        <p className='my-4'>Already have an account? <Link className='text-accent' to="/signin">Sign in</Link></p>
      </div>
    </div>
  )
}

export default Signup

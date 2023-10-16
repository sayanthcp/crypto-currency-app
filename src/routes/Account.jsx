import React from 'react'
import SavedCoins from '../components/SavedCoins'

const Account = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <div className='flex justify-between my-12 py-8 items-center rounded-div'>
        <div>
          <h1 className='text-2xl font-bold py-2'>Account</h1>
          <div>
            <p>Welcome user</p>
          </div>
        </div>
        <div>
          <button className='border px-6 py-2 rounded-2xl shadow-xl hover:shadow-2xl'>Sign out</button>
        </div>
      </div>
      <div className='flex justify-between my-12 py-8 items-center rounded-div'>
        <div className='min-h-[300px]'>
          <h1 className='text-2xl font-bold py-2'>Watch list</h1>
          <SavedCoins />
        </div>
      </div>
      
    </div>
  )
}

export default Account

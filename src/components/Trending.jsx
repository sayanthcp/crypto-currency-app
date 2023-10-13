import axios from 'axios'
import React, { useState } from 'react'

const Trending = () => {
  //state
  const [trending,setTrending] = useState([])

  const url = 'https://api.coingecko.com/api/v3/search/trending'

  useState(()=> {
axios.get(url).then((res)=> {
  setTrending(res.data.coins)
})
  },[])

  return (
    <div className='rounded-div my-12 py-8 text-primary'>
      <h1 className='text-2xl font-bold py-4'>Trending Coins</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {trending.map((coin,index) => (
         <div key={index} className='rounded-div flex justify-between p-4 hover:scale-105 ease-out duration-300'>
            <div className='flex w-full items-center justify-between'>
              <div className='flex'>
                <img className='rounded-full mr-4' src={coin.item.small} alt="/" />
                <div>
                  <p>{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>
              <div className='flex items-center'>
                <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="/" className='w-4 mr-2'/>
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
         </div>
        ))}
      </div>

    </div>
  )
}

export default Trending

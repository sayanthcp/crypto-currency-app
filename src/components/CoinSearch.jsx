import React, { useState } from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines'

const CoinSearch = ({coins}) => {
    //state
    const [searchText,setSearchText] = useState('')

  return (
    <div className='rounded-div my-4'>
        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
            <h1 className='text-2xl font-bold my-2'>Search Crypto</h1>
            <form>
                <input onChange={(e)=> setSearchText(e.target.value)} className='w-full bg-primary border border-input px-4 rounded-2xl shadow-xl' type="text" placeholder='search a coin'/>
            </form>
        </div>

        <table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b'>
                    <th className='px-4'></th>
                    <th>#</th>
                    <th className='text-left'>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>Mkt</th>
                    <th className='hidden sm:table-cell'>24h Volume</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
            <tbody>
                {coins.filter((value)=>{
                    if(searchText === ''){
                        return value;
                    }else if (
                        value.name.toLowerCase().includes(searchText.toLowerCase())
                    ){
                        return value;
                    }
                }).map((coin) => (
                    
                 <tr key={coin.id} className='h-[80px] border-b overflow-hidden'> 
                    <td><AiOutlineStar/></td> 
                    <td>{coin.market_cap_rank}</td>      
                    <td>
                        <div className='flex items-center'>
                            <img src={coin.image} alt="image" className='w-6 mr-2 rounded-full'/>
                            <p className='hidden sm:table-cell'>{coin.name}</p>
                        </div>
                    </td> 
                    <td>{coin.symbol.toUpperCase()}</td> 
                    <td>${coin.current_price.toLocaleString()}</td> 
                    <td>
                      {coin.price_change_percentage_24h > 0 
                      ? <p className='text-green-500'>{coin.price_change_percentage_24h.toFixed(2)}%</p> 
                      : <p className='text-red-500'>{coin.price_change_percentage_24h.toFixed(2)}%</p>}
                    </td> 
                    <td className='w[180px] hidden md:table-cell'>${coin.total_volume.toLocaleString()}</td> 
                    <td className='w-[180px] hidden sm:table-cell'>${coin.market_cap.toLocaleString()}</td> 
                    <td>
                        <Sparklines data={coin.sparkline_in_7d.price}>
                            <SparklinesLine color='teal'/>
                        </Sparklines>
                    </td>               
                </tr>     
                                   
                ))}
            </tbody>
        </table> 
    </div>
  )
}

export default CoinSearch

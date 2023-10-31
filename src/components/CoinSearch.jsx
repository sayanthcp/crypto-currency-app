import React, { useContext, useState } from 'react'
import CoinItems from './CoinItems';
import { Allcoins } from '../context/CoinContext';


const CoinSearch = () => {
    //state
    const [searchText,setSearchText] = useState('')

    const coins = useContext(Allcoins)

  return (
    <div className='rounded-div my-4'>
        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
            <h1 className='text-2xl font-bold my-2 ml-4'>Search Crypto</h1>
            <form>
                <input onChange={(e)=> setSearchText(e.target.value)} className='w-full bg-primary border border-input px-4 rounded-2xl shadow-xl' type="text" placeholder='Search a coin'/>
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
                {coins?.filter((value) => {
                    if(searchText === '') {
                        return value;
                    }else if (
                        value?.name.toLowerCase().includes(searchText.toLowerCase())
                    ){
                        return value;
                    }
                }).map((coin,index) => (
                    
                   <CoinItems key={index} coin={coin}/>
                                   
                ))}
            </tbody>
        </table> 
    </div>
  )
}

export default CoinSearch

import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';


export const Allcoins = createContext()

const CoinContext = ({children}) => {

     //state
  const [coins, setCoins] = useState([]);

  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=true";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [URL]);


  return (
    <div>
        <Allcoins.Provider value={ coins }>
            {children}
        </Allcoins.Provider>
      
    </div>
  )
}

export default CoinContext

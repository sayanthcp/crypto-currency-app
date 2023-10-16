import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import {ThemeProvider} from './context/ThemeContext'
import axios from 'axios'
import { Routes,Route } from 'react-router-dom'
import Home from './routes/Home'
import Signin from './routes/Signin'
import Signup from './routes/Signup'
import Account from './routes/Account'
import CoinPage from './routes/CoinPage'
import Footer from './components/Footer'
import {AuthContextProvider} from './context/AuthContext'


function App() {
  //state
  const [coins,setCoins] = useState([])

  const URL =  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=true';

   useEffect(()=>{
  axios.get(URL).then((res)=>{
    setCoins(res.data)
  }).catch((err)=>{err})
 
   },[URL]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home coins= {coins} />}/>
            <Route path='/signin' element={ <Signin /> }/>
            <Route path='/signup' element={ <Signup /> }/>
            <Route path='/account' element={ <Account /> }/>
            <Route path='/coin/:coinId' element={ <CoinPage /> }>
              <Route path=':coinId'/>
            </Route>
          </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App

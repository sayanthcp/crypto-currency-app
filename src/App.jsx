import "./App.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import CoinPage from "./routes/CoinPage";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import CoinContext from "./context/CoinContext";


function App() {
  

  return (
    
    <ThemeProvider>
      <AuthContextProvider>
        <CoinContext>
          <NavBar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/signin" element={ <Signin /> } />
            <Route path="/signup" element={ <Signup /> } />
            <Route path="/account" element={ <Account /> }/>
            <Route path="/coin/:coinId" element={ <CoinPage /> }>
              <Route path=":coinId" />
            </Route>
          </Routes>
          <Footer />
        </CoinContext>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;


import './App.css';
import { Navbar } from './imports';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CryptoCurrencies from './Components/CryptoCurrencies';
import CryptoDetails from "../src/Components/CryptoDetails"
import Exchange from './Components/Exchange';
import News from './Components/News';
import Footer from './Components/Footer';
import AppContext from './Utils/context';
function App() {
  return (
    <AppContext>
    <div className="App">
      <div className='Navbar'>
        <Navbar/>
       </div>
      <div className='Main'>
        <Routes>
          <Route path='/' element={<HomePage/>}  />
          <Route path='/crypto' element={<CryptoCurrencies/>}  />
          <Route path='/crypto/:coinId' element={<CryptoDetails />}  />
          <Route path='/exchange' element={<Exchange/>}  />
          <Route path='/news' element={<News/>}  />
        </Routes>
       </div>
      <div className='Footer'><Footer/> </div>
    </div>
    </AppContext>
  );
}

export default App;

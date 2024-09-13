import React, { useState } from 'react';
import Navbar from '../src/components/navbar/navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart';
import Placeorder from './pages/placeorder/Placeorder';
import Footer from './components/footer/footer';
import LoginPopup from './components/loginpopup/loginpopup';
import Verify from './pages/verify/verify';
import MyOrders from './pages/myorders/myorders';

const App = ()=>{

  const [showLogin, setShowLogin] = useState(false)

  return<>
  {showLogin ?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
  <div className='app'>
    <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
        <Route path='/verify' element={<Verify/>}/>
         <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
  </div>
  <Footer/>
  </>

}

export default App;
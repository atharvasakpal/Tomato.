import React from 'react';
import Navbar from '../src/components/navbar/navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart';
import Placeorder from './pages/placeorder/Placeorder';
import Footer from './components/footer/footer';

const App = ()=>{
  return<>
  <div className='app'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
  </div>
  <Footer/>
  </>

}

export default App;
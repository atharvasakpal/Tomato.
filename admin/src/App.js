import React from 'react';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import {Routes ,Route} from 'react-router-dom';
import Add from './pages/add/add';
import List from './pages/list/list';
import Order from './pages/order/order';

  import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = ()=>{
  return(
    <>
    <ToastContainer/>
    <Navbar/>
    <hr />
    <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/orders' element={<Order/>}/>
      </Routes>
    </div>
    </>
  )
};

export default App;
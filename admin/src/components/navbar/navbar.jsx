import React from 'react'

import './navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img src={assets.logo} className='logo' alt="" />
        <img src={assets.profile_image} alt="" className='profile-image' />
      </div>
    </div>
  )
}

export default Navbar

import React from 'react';
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Buy from '../../assets/images/Buy.png';

const Header = () => {
  return (
    <header className='header row'>
      <div className='container col-7'>
        <div className='navbar'>
            <Navbar />
        </div>
      </div>
      <div className='col-4'>
          <img src={Buy} alt="Images" />
        </div>
    </header>
  )
}

export default Header
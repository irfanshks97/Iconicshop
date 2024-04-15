import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container p-5'>
        <div className='container p-5'>
          <h1 className='text-center' style={{ fontSize: '30px' }}>Iconicshop</h1>
          <div className='row p-4'>
            <div className='col-lg-3'>
              <h3 className='fs-24 py-5 fw-5 text-white'>Get To Know Us</h3>
              <ul className='footer-link fs-14 '>
                <li>
                  <Link to="/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Press Releases
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Shopping Science
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-3'>
              <h3 className='fs-24 py-5 fw-5 text-white'>Connect With Us</h3>
              <ul className='footer-link flex-column fs-14 '>
                <li>
                  <Link to="/">
                    facebook
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    instagram
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    twitter
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-3'>
              <h3 className='fs-24 py-5 fw-5 text-white'>Make Money With US</h3>
              <ul className='footer-link flex-column fs-14 '>
                <li>
                  <Link to="/">
                    Sell on Iconicshop
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Sell Under Iconicshop Accelerator
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Protect And Build Your Brands
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Iconicshop Global Selling
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Become an Affiliate
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Fullfillment by Iconicshop
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Advertise on Your Products
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Iconicshop Pay on Merchant
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-3'>
              <h3 className='fs-24 py-5 fw-5 text-white'>Let Us Help You</h3>
              <ul className='footer-link flex-column fs-14'>
                <li>
                  <Link to="/">
                    Covid-19 and Iconicshop
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Your Account
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Returns Center
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    100% Purchase Protection
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Iconicshop App Download
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='container text-white'>
        <div className='row d-flex p-5 ms-5'>
          <div className='col-6 '>
            <h3>Iconicshop</h3>
          </div>
          <div className='col-6'>
            <select className='form-select w-50 w-lg-25'>
              <option>Select Language</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>
              <option>Gujrati</option>
              <option>Bangali</option>
              <option>Urdu</option>
            </select>
          </div>
        </div>
      </div>
      <div className='p-5 text-center'>
         <span className='text-white copyright-text  fs-14 fw-3 text-manrope'>&copy; 2024 IconicShop. All Rights Reserved.</span>
      </div>
    </footer>
  )
};
export default Footer;
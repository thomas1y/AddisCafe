import React from 'react'
import './footer.css';
import { assets } from '../assets/images/assets';
const Footer = () => {
  return (
    <div className='footer' id='contact'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                 <img src={assets.logo} alt='' />
                 <p>Find Us
Come visit Yammy Restaurant for delicious meals and warm hospitality. We're here to make your dining experience unforgettable!</p>
                 <div className='footer-social-icons'>
                   <img src={assets.facebook_icon} alt="" />
                   <img src={assets.twitter_icon} alt="" />
                   <img src={assets.linkedin_icon} alt="" />
                 </div>
                 
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+251928449810</li>
                    <li>contact@addiscafe.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'> Copyright 2025 &copy; AddisCafe - All rights reserved.</p>
    </div>
  )
}

export default Footer
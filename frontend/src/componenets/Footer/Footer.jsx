import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'> 
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>lorem ipsum simply dummy text of the printinig and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a gallery of type and scrambled it to make a type specimen book. </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <li>+977 9869194907</li>
            <li>anishdevkota12@gmail.com</li>
        </div>
    </div>
    <hr />
    <p className='Footer-copyright'>Copyright 2024 @ Order.com - All Right Reserved.</p>  
    </div>
  )
}

export default Footer

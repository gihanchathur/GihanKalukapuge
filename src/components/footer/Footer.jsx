import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Tharushi Kuruwitage</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/tharushi.kuruwitage/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/thxrusheyy.__/"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/tharushi-kuruwitage-50196b1a1/"><FiLinkedin/></a>
      </div>
      

      <div className="footer__copyright">
        <small>&copy; 2023 Tharushi Kuruwitage. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
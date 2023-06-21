import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Gihan Kalukapuge</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Achievements</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/gihan.chathuranga.5205?mibextid=ZbWKwL/"><FaFacebookF/></a>
        <a href="https://instagram.com/_gihan_00?igshid=NGExMmI2YTkyZg%3D%3D/"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/gihan-kalukapuge-6b19b2248/"><FiLinkedin/></a>
      </div>
      

      <div className="footer__copyright">
        <small>&copy; 2023 Gihan Kalukapuge. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
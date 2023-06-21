import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/gihan-kalukapuge-6b19b2248/" target="_blank" rel="noreferrer">
            <BsLinkedin/>
        </a>
        <a href="https://github.com/gihanchathur" target="_blank" rel="noreferrer">
            <BsGithub/>
        </a>
        <a href="https://www.facebook.com/gihan.chathuranga.5205?mibextid=ZbWKwL/" target="_blank" rel="noreferrer">
            <BsFacebook/>
        </a>
        <a href="https://instagram.com/_gihan_00?igshid=NGExMmI2YTkyZg%3D%3D/" target="_blank" rel="noreferrer">
            <BsInstagram/>
        </a>
    </div>
  )
}

export default HeaderSocials
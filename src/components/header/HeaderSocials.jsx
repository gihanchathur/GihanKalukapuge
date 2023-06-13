import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tharushi-kuruwitage-50196b1a1/" target="_blank" rel="noreferrer">
            <BsLinkedin/>
        </a>
        <a href="https://github.com/Tharushit" target="_blank" rel="noreferrer">
            <BsGithub/>
        </a>
        <a href="https://www.facebook.com/tharushi.kuruwitage/" target="_blank" rel="noreferrer">
            <BsFacebook/>
        </a>
        <a href="https://www.instagram.com/thxrusheyy.__/" target="_blank" rel="noreferrer">
            <BsInstagram/>
        </a>
    </div>
  )
}

export default HeaderSocials
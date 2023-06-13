import React from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {RiMessengerLine} from 'react-icons/ri';
import {RiWhatsappLine} from 'react-icons/ri';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l0bkst6', 'template_4e4swoo', form.current, '8TTRUNkp59-sQnEQy')
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact-container">
        <div className="contact__options">

          <article className="contact__option">
            <HiOutlineMail className='.contact__option-icon'/>
            <h5>E-mail</h5>
            <h5>tharushikuruwitage@gmail.com</h5>
            <a href="mailto:tharushikuruwitage@gmail.com" target='blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='.contact__option-icon'/>
            <h5>Messenger</h5>
            <h5>Tharushi Kuruwitage</h5>
            <a href="https://m.me/tharushi.kuruwitage" target='blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiWhatsappLine className='.contact__option-icon'/>
            <h5>WhatsApp</h5>
            <h5>Mobile Number</h5>
            <a href="https://api.whatsapp.com/send?phone+94701398050" target='blank'>Send a message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact;
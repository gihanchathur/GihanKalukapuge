import React from 'react';
import './services.css';
import {FaUniversity} from 'react-icons/fa';
import {IoBookSharp} from 'react-icons/io5';
import {BsPersonHeart} from 'react-icons/bs';

const Services = () => {
  return (
    <section id="services">
      <h5>Certified Competence, Dynamic Roles, Empowering Responsibilities</h5>
      <h2>Education, Certifications , Roles & Resposibilities</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Education</h3>
          </div>

          <ul className="service__list">

            <li>
            <FaUniversity className="service__list-icon"/>
            <p>University of Moratuwa <br/>BSc (Hons) Information Technology & Management</p>

            </li>

            <li>
            <FaUniversity className="service__list-icon"/>
            <p>Chartered Institute of Personnel Management <br/>Diploma in Human Resource Management</p>
            </li>

            <li>
            <FaUniversity className="service__list-icon"/>
            <p>Institute of Software Engineering <br/>Diploma in Comprehensive Master Java Developer</p>
            </li>

            <li>
            <FaUniversity className="service__list-icon"/>
            <p>Devi Balika Vidyalaya - Colombo 08 <br/> G.C.E. Advanced Level</p>
            </li>

            <li>
            <FaUniversity className="service__list-icon"/>
            <p>Ananda Balika Vidyalaya - Colombo 10<br/>G.C.E. Ordinary Level</p>
            </li>

            <li>
            <FaUniversity className="service__list-icon"/>
            <p>Institute of Bankers Sri Lanka <br/> Itermediate in Applied Banking & Finance</p>
            </li>

            <li>
            <FaUniversity className="service__list-icon"/>
            <p>Duke University <br/> Certificate Course in Java Programming with honors</p>
            </li>
         </ul>

        </article>

        <article className="service">
          <div className="service__head">
            <h3>Certifications</h3>
          </div>

          <ul className="service__list">

            <li>
            <IoBookSharp className="service__list-icon"/>
            <p><b>Certificate Course in Java Programming with honors </b><br/> Duke University</p>
            </li>

            <li>
            <IoBookSharp className="service__list-icon"/>
            <p><b>Web Design for Beginners</b><br/> Department of Computer Science & Engineering, University of Moratuwa</p>
            </li>

            <li>
            <IoBookSharp className="service__list-icon"/>
            <p><b>Certificate Course in Fundamentals in Digital Marketing </b><br/> Google Digital Garage</p>
            </li>

            <li>
            <IoBookSharp className="service__list-icon"/>
            <p><b>Certificate Course in UI/UX for Beginners </b><br/> Great Learning Academy</p>
            </li>

            <li>
            <IoBookSharp className="service__list-icon"/>
            <p><b>Fundamentals in HTML </b><br/> Sololearn</p>
            </li>

            <li>
            <IoBookSharp className="service__list-icon"/>
            <p><b>AWS Cloud Technical Essentials</b><br/>Amazon Web Services</p>
            </li>

            <li>
            <IoBookSharp className="service__list-icon"/>
            <p><b>React Basics </b><br/> Meta Android Developer Specialization</p>
            </li>
         </ul>

        </article>

        <article className="service">
          <div className="service__head">
            <h3>Roles & Resposibilities</h3>
          </div>

          <ul className="service__list">

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Assisstant Secretary</b></p>
            </li>
            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Active Member</b><br/>Leo Club of University of Moratuwa</p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Media Committee Lead Web Design</b><br/> IEEE Student Branch of University of Moratuwa</p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Editorial Pillar Member</b><br/> Mora E-Sports Community</p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Former Crew Member</b><br/> Rowing Crew University of Moratuwa</p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Editorial Pillar Member</b><br/> Mora E-Sports Community</p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Editorial Team Member</b><br/>Information Technology Society of University of Moratuwa</p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Project Editor</b><br/>Rotaract Club of University of Moratuwa</p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Committee Member</b><br/>IEEE WIE Student Branch OF University of Moratuwa</p>
            </li>
         </ul>

        </article>


      </div>
    </section>
  )
}

export default Services
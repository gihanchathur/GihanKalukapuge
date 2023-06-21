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
            <p>University of Colombo School of Computing<br/>Diploma in Java Programming</p>
            </li>

            <li>
            <FaUniversity className="service__list-icon"/>
            <p>Institute of Software Engineering <br/>Diploma in Comprehensive Master Java Developer</p>
            </li>

            <li>
            <FaUniversity className="service__list-icon"/>
            <p>Ananda College - Colombo 10<br/> G.C.E. Advanced Level</p>
            </li>

            <li>
            <FaUniversity className="service__list-icon"/>
            <p>Thurstan College - Colombo 07<br/>G.C.E. Ordinary Level</p>
            </li>

            <li>
            <FaUniversity className="service__list-icon"/>
            <p>UINCAT Information Technology Academy<br/> Diploma in C++ Programming</p>
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
            <p><b>Diploma in Java Programming</b><br/>University of Colombo School of Computing</p>
            </li>

            <li>
            <IoBookSharp className="service__list-icon"/>
            <p><b>Web Design for Beginners</b><br/> Department of Computer Science & Engineering, University of Moratuwa</p>
            </li>

            <li>
            <IoBookSharp className="service__list-icon"/>
            <p><b>Diploma in C++ Programming</b><br/>UINCAT Information Technology Academy</p>
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
            <p><b>Committee Member</b><br/>INTECS University of Moratuwa</p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Design Committee Member</b><br/> IEEE Industry Applications Society of University of Moratuwa</p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Former Crew Member</b><br/> Weight Lifting Crew University of Moratuwa</p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Design Team Member</b><br/> FIT Moments - Faculty of IT Media Unit</p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Creative Design  Pillar Memberr</b><br/> MoraSpirit</p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Design Team Lead - Hackmoral 5.0</b></p>
            </li>

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Design Team Member</b><br/>Information Technology Society of University of Moratuwa</p>
            </li>
            
            

            <li>
            <BsPersonHeart className="service__list-icon"/>
            <p><b>Project Designer</b><br/>RotaractMora</p>
            </li>
         </ul>

        </article>


      </div>
    </section>
  )
}

export default Services;
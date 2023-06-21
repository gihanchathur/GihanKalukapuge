import React from "react";
import "./about.css";
import ME from "../../assets/me1.jpg";
import { BiAward } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { VscRootFolder } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className="about__icon" />
              <h5>Cyber Security Enthusiast</h5>
              <small>Beginner</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>IT Undergraduate</h5>
              <small>Third Year</small>
            </article>

            <article className="about__card">
              <VscRootFolder className="about__icon" />
              <h5>Creative Designer</h5>
              <small>Experienced</small>
            </article>
          </div>

          <p>
            Highly motivated IT undergraduate with a strong foundation in
            computer science, programming, and network systems, I am committed
            to designing, building, and maintaining secure and efficient
            technology solutions. A creative problem-solver and critical
            thinker, I am passionate about continuously expanding my knowledge
            to play a key role in shaping the future of technology.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpeg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The Metaverse: Unlocking a New Era of Virtual Reality and Digital Interaction',
    github: "https://medium.com/@thathsaraneekt.20",
    live: "https://medium.com/@thathsaraneekt.20/the-metaverse-unlocking-a-new-era-of-virtual-reality-and-digital-interaction-c1987fbabf83"
  },

  {
    id: 2,
    image: IMG2,
    title: 'Devthon 1.0 - Hackathon website developed for Leo Club of University of Moratuwa as a volunteer.',
    github: "https://github.com/Tharushit",
    live: "https://devthon.uomleos.org/"
  },

  {
    id: 3,
    image: IMG3,
    title: 'The Importance of Web Development for Undergraduates',
    github: "https://medium.com/@thathsaraneekt.20",
    live: "https://medium.com/@thathsaraneekt.20/the-importance-of-web-development-for-undergraduates-7911568ef251"
  },

  {
    id: 4,
    image: IMG4,
    title: 'First Year Hardware Project - Toy Car',
    github: "https://github.com/Tharushit",
    live: "https://dribbble.com/search/alien-pixels"
  },

  {
    id: 5,
    image: IMG5,
    title: 'EveM Event Management System',
    github: "https://github.com/Tharushit",
    live: "https://dribbble.com/search/alien-pixels"
  },

  {
    id: 6,
    image: IMG6,
    title: 'My Leo - Mobile App for Membership Tracking',
    github: "https://github.com/Tharushit",
    live: "https://dribbble.com/search/alien-pixels"
  }
]





const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, live }) => {
            return  (
              <article key={id} className='portfolio__item'>
                <div className="prtfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title} </h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github/Medium</a>
                  <a href={live} className='btn btn-primary' target='blank'>Live Demo</a>
                </div>
              </article>
            )
           })  
          }
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpeg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import AVTR5 from '../../assets/avatar5.jpg';
import AVTR6 from '../../assets/avatar6.jpg';
import AVTR7 from '../../assets/avatar7.jpeg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Realhack 4.0 - 46th place  from 230 Teams ',
    review: "Sri Lanka's premium 24 hour coding hackathon, RealHack is a 24-hour hackathon organized by the RealHack team. The hackathon is open to all undergraduates and school students in Sri Lanka. The hackathon is organized with the aim of providing a platform for students to showcase their talents and skills in the field of technology. The hackathon is organized with the aim of providing a platform for students to showcase their talents and skills in the field of technology."
  },

  {
    avatar: AVTR2,
    name: 'Hackmoral 5.0 - First Runner Up',
    review: "HackMoral 5.0 is a mini hackathon hosted by the INTECS of the Faculty of Information Technology, University of Moratuwa. It is a focused 4-hour competition."
  },

  {
    avatar: AVTR3,
    name: 'Best Administrated Leo Club - Winner - Mid Year Review ',
    review: "RefleXion'23 - Mid-Year Review of Leo District 306 A2, organized by Leo District 306 A2 was held 21st of January 2023 at university premises. The event was organized to review the progress of the Leoistic year 2021/22 and to appreciate the efforts of the Leos who have worked hard to achieve the goals of the Leoistic year."
  },

  {
    avatar: AVTR4,
    name: 'ICT Competitions 2018 - Third Place (Web Design)',
    review: 'The ICT Competition 2018 was organized by the ICT Society of the Devi Balika Vidyalaya, Colombo 08 with the aim of providing a platform for school students to showcase their talents and skills in the field of technology. The competition was held on 24th of November 2018 at the school premises.'
  },

  {
    avatar: AVTR5,
    name: 'Noesis 2018 - Third Place (Programming)',
    review: 'Noesis 2018 is a mini hackathon organized by the ICT Society of the Nalanda College, Colombo 10. The hackathon is open to all school students in Sri Lanka. The hackathon is organized with the aim of providing a platform for students to showcase their talents and skills in the field of technology. The hackathon is organized with the aim of providing a platform for students to showcase their talents and skills in the field of technology.'
  },

  {
    avatar: AVTR6,
    name: 'IIT IEEE Quiz Competition - Participation',
    review: 'The IIT IEEE Quiz Competition is a quiz competition organized by the IEEE Student Branch of the Informatics Institute of Technology. The quiz competition is open to all school students in Sri Lanka. The quiz competition is organized with the aim of providing a platform for students to showcase their talents and skills in the field of technology. The quiz competition is organized with the aim of providing a platform for students to showcase their talents and skills in the field of technology.'
  },

  {
    avatar: AVTR7,
    name: 'First Runner Up - FIT Sixes 2023',
    review: "FIT Sixes 2023 is a 6-a-side cricket tournament organized by the Student Union of the Faculty of Information Technology, University of Moratuwa. The tournament is open to all undergraduates and IT industry employees in Sri Lanka. The tournament is organized with the aim of providing a platform for students to showcase their talents and skills in the field of sports. The tournament is organized with the aim of providing a platform for students to showcase their talents and skills in the field of sports."
  }
]

const Testimonias = () => {
  return (
    <section id="testimonials">
      <h5>From Passion to Triumph: My Journey of Achievements</h5>
      <h2>Achievements</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
        {data.map(({avatar, name, review}, index) =>{
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  )
}

export default Testimonias
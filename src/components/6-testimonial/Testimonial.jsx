import React from 'react'
import './testimonial.css';
import { Heading,TestimonialsCard } from '../../constants/Constants';

function Testimonial() {
  return (
    <div className='testimonial'>
      <Heading title="Testimonials"/>
      <section className="personne">
        <div className="perso">
          <TestimonialsCard avatar="./image-testimonial/avatar-Bell.png" nom="Claire Bell" competence="Designer" para="Slate helps you see how many more days 
            you need to work to reach your financial 
            goal for the month and year. Slate helps 
            you see how many more days 
            you need to work to reach your financial 
            goal for the month and year.your financial 
            goal for the month and year."/>
          <TestimonialsCard avatar="./image-testimonial/avatar-Lane.png" nom="Francisco Lane" competence="Designer" para="Slate helps you see how many more days 
            you need to work to reach your financial 
            goal for the month and year. Slate helps 
            you see how many more days 
            you need to work to reach your financial 
            goal for the month and year."/>
        </div>
        <div className="perso">
          <TestimonialsCard avatar="./image-testimonial/avatar-Ralph.png" nom="Ralph Fisher" competence="Designer" para="Slate helps you see how many more days 
            you need to work to reach your financial 
            goal for the month and year. Slate helps 
            you see how many more days 
            you need to work to reach your financial 
            goal for the month and year.your financial 
            goal for the month and year."/>
          <TestimonialsCard avatar="./image-testimonial/avatar-Jorge.png" nom="Jorge Murphy" competence="Designer" para="Slate helps you see how many more days 
            you need to work to reach your financial 
            goal for the month and year. Slate helps 
            you see how many more days 
            you need to work to reach your financial 
            goal for the month and year.your financial 
            goal for the month and year."/>
        </div>
      </section>
    </div>
  )
}

export default Testimonial
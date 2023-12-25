import React from 'react'
import { Heading } from '../../constants/Constants';
import './feature.css';
import { Textblock } from '../../constants/Constants';
import restaurant from './img-svg/restaurant.svg';
import alien from './img-svg/alien.svg';
import all from './img-svg/all.svg';

function Feature() {
  return (
    <div className='feature'>
      <Heading title="FEATURES" description="Most calendars are designed for teams. Slate is designed for 
      freelancers who want a simple way to plan their schedule."/>
      <section className="frame20">
        <div className="frame19">
          <img src="./image-feature/Chat-Bot2x.png" className='chat' alt="chat bot" />
          <img src="./image-feature/Line-Chart-1.png" className='chat1' alt="chat bot" />
        </div>
        <div className="content-rows">
          <Textblock minlogo={restaurant} mintitle="A single source 
            of truth" minpara="When you add work to your 
            Slate calendar we automatically 
            calculate useful insights 
            "/>
          <Textblock minlogo={alien} mintitle="Intuitive 
            interface" minpara="When you add work to your 
            Slate calendar we automatically 
            calculate useful insights 
            "/>
          <Textblock minlogo={all} mintitle="Or with rules" minpara="When you add work to your 
            Slate calendar we automatically 
            calculate useful insights 
            "/>
        </div>
      </section>
    </div>
  )
}

export default Feature
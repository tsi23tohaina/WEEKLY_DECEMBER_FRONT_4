import React from 'react';
import "./partner.css"
import { Heading,Constants } from '../../constants/Constants';
import apple from './logo-svg/1-apple-app-store.svg'
import apiary from './logo-svg/2-apiary.svg'
import android from './logo-svg/3-android-icon.svg'
import basecamp from './logo-svg/4-basecamp.svg'
import airbnb from './logo-svg/5-airbnb.svg'  
import ibm from './logo-svg/6-ibm.svg'

function Partner() {
  return (
    <div className='partner'>
      <Heading title="Partners" description="We focus on ergonomics and meeting you where you work. 
      It's only a keystroke away."/>
      <section className='LogoPartner'>
        <div className="three-logo">
          <img src={apple}  />
          <img src={apiary} />
          <img src={android} />
        </div>
        <div className="three-logo">
          <img src={basecamp} />
          <img src={airbnb} />
          <img src={ibm} />
        </div>
      </section>
      <Constants name="All Partners"/>
    </div>
  )
}

export default Partner
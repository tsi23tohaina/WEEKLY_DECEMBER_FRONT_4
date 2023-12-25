import React from 'react'
import { Heading,Card } from '../../constants/Constants';
import './content7.css'

function Content7() {
  return (
    <div className='content7'>
      <Heading title="Contents" description="We focus on ergonomics and meeting you where you work. 
        It's only a keystroke away."/>
      <section className="cards">
        <Card caTitle="Work" caPara="Ever wondered if you're too reliant 
        on a client for work? Slate helps 
        you identify ." cabtn="Sign Up" caImg="./image-content7/Macbook-Pro.png"/>
        <Card caTitle="Design with real data" caPara="Ever wondered if you're too reliant 
        on a client for work? Slate helps 
        you identify ." cabtn="Sign Up" caImg="./image-content7/Boards-Notifications.png"/>
      </section>
    </div>
  )
}

export default Content7
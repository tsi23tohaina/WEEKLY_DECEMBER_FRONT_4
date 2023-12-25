import React from 'react';
import './content8.css';
import { Constants, Heading,ImageCard } from '../../constants/Constants';

function Content8() {
  return (
    <div className='content8'>
      <Heading title="Gallery" description="We focus on ergonomics and meeting you where you work. 
      It's only a keystroke away."/>
      <section className="images">
        <div className="part1">
          <ImageCard imageURL="./image-content8/Card.png"/>
          <div className="parts">
            <ImageCard imageURL="./image-content8/Card1.png"/>
            <ImageCard imageURL="./image-content8/Card2.png"/>
            <ImageCard imageURL="./image-content8/Card3.png"/>
          </div>
        </div>
        <div className="part">
          <ImageCard imageURL="./image-content8/Card4.png"/>
          <ImageCard imageURL="./image-content8/Card5.png"/>
          <ImageCard imageURL="./image-content8/Card6.png"/>
        </div>
        <div className="part2"></div>
      </section>
      <Constants name="See more"/>
    </div>
  )
}

export default Content8
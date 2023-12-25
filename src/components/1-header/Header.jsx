import React from 'react';
import './header.css'
import logo from './logo/logo-dark.svg';

//le constant 
import {ConstantsPrim,Constants,Paragraphe} from '../../constants/Constants';

function Header() {
  return (
    <div className='header'>
      <nav className="navbar">
        <div className="logo-dark">
          <img src={logo} alt="logo-dark"/>
        </div>
        <div className="menu">
          <a href="#" className='link'>Home</a>
          <a href="#" className='link'>Product</a>
          <a href="#" className='link'>About</a>
          <a href="#" className='link'>Contact</a>
        </div>
        <div className="button">
          <Constants name="Login"/>
        </div>
        <div className="menu-burger">
          <span className='bars'></span>
        </div>
      </nav>
      <section className='text1'>
        <h1 className="titre">Work at the speed of thought</h1>
        <Paragraphe text="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."/>
      </section>
      <section className="bouttons">
        <ConstantsPrim namePrim="Try For Free"/>
        <Constants name="Learn More"/>
      </section>
      <section className="screens">
        <img src="./image-header/screens.png" alt="screens" className='image' />
      </section>
    </div>
  )
}

export default Header;
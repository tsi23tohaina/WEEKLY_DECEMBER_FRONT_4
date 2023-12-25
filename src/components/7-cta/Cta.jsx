import React from 'react';
import './cta.css';
import { ConstantsPrim } from '../../constants/Constants';

function Cta() {
  return (
    <div className='cta'>
      <section className="cta-div">
        <div className="left-content">
          <p className="paraStyleCta">OpenType features 
            and Variable fonts</p>
          <ConstantsPrim namePrim="Try For Free"/>
        </div>
        <div className="media-content">
          <img src="./image-cta/media-content.png" className='radius'/>
        </div>
      </section>
    </div>
  )
}

export default Cta
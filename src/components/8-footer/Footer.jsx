import React from 'react';
import './footer.css';
import { List } from '../../constants/Constants';
import map from './logo-svg/map.svg';
import phone from './logo-svg/phone-android.svg';
import twitter from './logo-svg/twitter.svg';
import facebook from './logo-svg/facebook.svg';
import In from './logo-svg/linkdln.svg';

function Footer() {
  return (
    <div className='footer'>
      <div className="rows1">
        <List titleList="Fingertipe" list1="Home" list2="Examples" list3="Pricing" list4="Updates"/>
        <List titleList="Resources" list1="Home" list2="Examples" list3="Pricing" list4="Updates"/>
        <List titleList="About" list1="Home" list2="Examples" list3="Pricing" list4="Updates"/>
      </div>
      <div className="rows2">
        <div className="ligne1">
          <img src={map} alt="map" width="36" height="36"/>
          <p className="lig-text">7480 Mockingbird Hill undefined </p>
        </div>
        <div className="ligne1">
          <img src={phone} alt="phone" width="26" height="26" />
          <p className="lig-text">(239) 555-0108</p>
        </div>
        <div className="ligne2">
          <img src={twitter} alt="twitter" width="30" height="30" className='lien'/>
          <img src={facebook} alt="facebook" width="30" height="30" className='lien'/>
          <img src={In} alt="linkdln" width="30" height="30" className='lien' />
        </div>
      </div>
    </div>
  )
}

export default Footer
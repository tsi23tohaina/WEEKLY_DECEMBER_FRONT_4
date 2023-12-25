import React from 'react';
import './constants.css'

//ConstantsPrim de couleur blue
export function ConstantsPrim({namePrim}){
  return (
    <button className='btnPrim'>{namePrim}</button>
  )
}

/* Constanta boutton */
export function Constants({name}) {
  return (
    <button className='btn'>{name}</button>
  )
}

//paragraphe

export function Paragraphe({text}){
  return (
    <p className='para'>{text}</p>
  )
}

/* heading ou le titre et petit description*/

export function Heading({title,description}){
  return (
    <div className="head">
      <h1 className='head-title'>{title}</h1>
      <p className='head-description'>{description}</p>
    </div>
  )
}

/* dans la partie feature text-block */
export function Textblock({minlogo,mintitle,minpara}){
  return (
    <div className='tblock'>
      <div className="titre-logo">
        <img src={minlogo} alt="minlog" />
        <h2 className="mint">{mintitle}</h2>
      </div>
      <div className="min-para">{minpara}</div>
    </div>
  )
}

/********************* 3-contents ********************/
//cards

export function Card({caTitle,caPara,cabtn,caImg}){
  return(
    <div className="card">
      <div className="coText">
        <h3 className='cotitle'>{caTitle}</h3>
        <p className='coPara'>{caPara}</p>
      </div>
      <ConstantsPrim namePrim={cabtn}/>
      <img src={caImg} />
    </div>
  )
}


/* image card pour 4-content8 */
export function ImageCard({imageURL}){
  return (
    <img src={imageURL}/>
  )
}

/* 6-testimonial: card testimon */

export function TestimonialsCard({avatar,nom,competence,para}){
  return(
    <div className="testim">
        <div className="av-nom">
          <img src={avatar} />
          <div className="nom-compt">
            <a className='nom' href="#">{nom}</a>
            <p className="compte">{competence}</p>
          </div>
        </div>
        <div className="text-desc">{para}</div>
    </div>
  )
}

/* Partie du 8-footer: List */

export function List({titleList,list1,list2,list3,list4}){
      return(
        <div className="Liste">
          <div className="titre-list">
            <h2 className='style-title'>{titleList}</h2>
          </div>
          <div className="les-list">
            <p className="mots">{list1}</p>
            <p className="mots">{list2}</p>
            <p className="mots">{list3}</p>
            <p className="mots">{list4}</p>
          </div>
        </div>
      )
}
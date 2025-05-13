import React from 'react'
import BannerImg from '../../assets/images/architecture-gf.svg';

export default function Banenr() {
  return (
    <>
    <div className="container full-container">
      <div className="row g-0">
        <div className="banner">
          <img className='img z-n1' src={BannerImg} alt="architecture" />
          <p className='z-3 '>THE EASY, RELIABLE WAY <br />
            TO TAKE CARE OF YOUR  HOME</p>
        </div>
      </div>
      </div>

    </>
  )
}

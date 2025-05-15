import React from 'react'
import BannerImg from '../../assets/images/architecture-gf.svg';
export default function Banenr() {
  return (
    <>

        <div className="banner">
          <img className='img z-n1' src={BannerImg} alt="architecture" />
          <p className='z-3 baner-text ps-5 '>THE EASY, RELIABLE WAY <br />
            TO TAKE CARE OF YOUR  HOME</p>
        </div>

    </>
  )
}

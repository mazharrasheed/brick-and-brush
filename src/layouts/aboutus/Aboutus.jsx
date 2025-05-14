import React from 'react'
import ContactForm from '../../components/ContactForm'
import BannerSm from '../../components/BannerSm'
import Banner1 from './Banner1'
import Banner2 from './Banner2'
import AboutCo from './AboutCo'

import smallBannerImg from '../../assets/images/architecture.svg';
export default function Aboutus() {

  const text1 = "WHY YOU’LL BE HAPPY"
  const text2 = "YOU CHOSE US"

  return (

    <div>
      <Banner1></Banner1>
      <AboutCo></AboutCo>
      <Banner2></Banner2>
      <div className='mb-5'>
        <BannerSm image={smallBannerImg} text1={text1} text2={text2}></BannerSm>
      </div>


      <ContactForm></ContactForm>
    </div>

  )
}

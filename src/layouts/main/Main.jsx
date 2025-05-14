import React from 'react'
import Banner from './Banner'
import ServicesMain from './ServicesMain'
import BannerSm from '../../components/BannerSm';
import OurWorkMain from './OurWorkMain';
// import ContactForm from './ContactForm';
import ContactForm from '../../components/ContactForm';
// import mainBannerImg from '../../assets/images/architecture-gf.svg';
import smallBannerImg from '../../assets/images/architecture.svg';
import OurServices from '../../components/OurServices';


export default function Main() {
  const text1='YOUR RENOVATION WILL RUN QUAILITAIVELY'
  const text2='THANKS TO OUR 5 STEP PROCESS'
  const text3="SERVICES"
  const text4="ALL SERVICES"
  return (
    <div className='contianer'  >
   <Banner ></Banner>
   <OurServices text1={text3} text2={text4}></OurServices>
   <BannerSm image={smallBannerImg} text1={text1} text2={text1}></BannerSm>
   <OurWorkMain></OurWorkMain>
   <ContactForm></ContactForm>
    </div>
  )
}

import React from 'react'
import Banner from './Banner'
import ServicesMain from './ServicesMain'
import BannerSm from '../../components/BannerSm';
import OurWorkMain from './OurWorkMain';
// import ContactForm from './ContactForm';
import ContactForm from '../../components/ContactForm';
// import mainBannerImg from '../../assets/images/architecture-gf.svg';
// import smallBannerImg from '../../assets/images/architecture.svg';
import '../../assets/css/main.css'

export default function Main() {
  return (
    <div className='contianer'  >
   <Banner ></Banner>
   <ServicesMain></ServicesMain>
   <BannerSm></BannerSm>
   <OurWorkMain></OurWorkMain>
   <ContactForm></ContactForm>
    </div>
  )
}

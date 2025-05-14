import React from 'react'
import PageHeader from '../../components/PageHeader';
import OurServices from '../../components/OurServices';
import ContactForm from '../../components/ContactForm';
import BannerImg from '../../assets/images/architecture.svg';


export default function Services() {

  const text1='OUR SERVICES'
  const text2='THE EASY, RELIABLE WAY'
  const text3='TO TAKE CARE OF YOUR HOME'

  const text4="SERVICES"


  return (
    <>
<div className='mb-5' > 
 <PageHeader image={BannerImg} text1={text1} text2={text2} text3={text3} ></PageHeader>
</div>
   <div>
    <OurServices text1={text4} ></OurServices>
   </div>
    <ContactForm></ContactForm>

    </>
   

  )
}

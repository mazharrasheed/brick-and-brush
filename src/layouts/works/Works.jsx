import React from 'react'
import image1 from '../../assets/images/interior-g907cea68c_1920.png'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'


import ProjectItems from './ProjectItems'

export default function Works() {

   const text1='OUR WORK'
  const text2='THE EASY, RELIABLE WAY'
  const text3='TO TAKE CARE OF YOUR HOME'


  return (

    <>
    
    <div className=''>
      <PageHeader image={image1} text1={text1} text2={text2} text3={text3}></PageHeader>
    </div>

    <div className='project-container'>
      <h1 className='ms-5'> PROJECT</h1>
    <ProjectItems></ProjectItems>

    </div>

    <div>
      <ContactForm></ContactForm>
    </div>

    </>
  )
}

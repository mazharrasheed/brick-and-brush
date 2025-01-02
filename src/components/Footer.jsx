import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='container full-container contact p-3 '
      style={{
        backgroundImage: "url('/images/footer-background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "500px",
      }}
    >

      
      <div className="row pt-0  ">
        <div className="col-md-4 ">
          <img className='img-fluid' src="/images/footerlogo.svg" alt="" />
        </div>
        <div className="col-md-2 offset-md-1 align-content-center g-0">
          <h3 className='text-white ' to=''>SERVICES</h3>
        </div>
        <div className="col-md-1 align-content-center g-0">
          <h3 className='text-white ' to=''>LINKS</h3>
        </div>
        <div className="col-md-3 offset-md-1 align-content-center g-0">
          <h3 className='text-white ' to=''>WORKING HOURS</h3>
        </div>
      </div>

      <div className="row pt-0  ">
        <div className="col-md-4 ">
          <p className='text-white ps-3'>
            BRICK & BRUSH INC - however, forget
            that consultation with a broad
            asset requires the definition and
            refinement of participatory systems.
            The task of the organization,
            in particular the constant infor-
            mation and propaganda support
            of our activities, requires
            the definition and clarification
            of significant financial and
            administrative conditions
          </p>
        </div>
        <div className="col-md-2 offset-md-1  g-0">
          <Link className='text-decoration-none text-white ' to=''>Home</Link><br />
          <Link className='text-decoration-none text-white ' to=''>ABOUT US</Link><br />
          <Link className='text-decoration-none text-white ' to=''>SERVICES</Link><br />
          <Link className='text-decoration-none text-white ' to=''>OUR WORK</Link><br />
          <Link className='text-decoration-none text-white ' to=''>CONTAC US</Link>
        </div>
        <div className="col-md-1  g-0 ">
          <Link className='text-decoration-none text-white ' to='/'>Home</Link><br />
          <Link className='text-decoration-none text-white ' to='/aboutus/'>ABOUT US</Link><br />
          <Link className='text-decoration-none text-white ' to='/services/'>SERVICES</Link><br />
          <Link className='text-decoration-none text-white ' to='/ourwork/'>OUR WORK</Link><br />
          <Link className='text-decoration-none text-white ' to='contactus'>CONTAC US</Link>
        </div>
        <div className="col-md-3 offset-md-1  g-0">
          <p className='text-white '>

            Our support team is here to help
            you 24/7 
            <br />
            <br />

            Monday-Friday: 8:30 AM - 5:30 PM
            <br />
            <br />

            Saturday: 10:00 AM - 2:00 PM
            <br />
            <br />

            Sunday: Closed
            <br />
            <br />

            Our Help Desk: 24/7

          </p>
        </div>
      </div>

    </div>


  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/footer.css'

export default function Footer() {
  return (
    <div className='container full-container bg-black'>
      <div className="footer">
        <div className="row log-row  ">
          <div className="col-md-4 ">
            <img className='img-fluid' src="/images/footerlogo.svg" alt="" />
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
          <div className="col-md-8">
            <div className="row pt-4  ">
              <div className="col-md-3 offset-md-1 g-0">
                <div className="row">
                  <h3 className='text-white p-0 ' to=''>SERVICES</h3>
                </div>
                <div className="row">
                  <div className=" g-0">
                    <Link className='text-decoration-none text-white ' to=''>Home</Link><br />
                    <Link className='text-decoration-none text-white ' to=''>ABOUT US</Link><br />
                    <Link className='text-decoration-none text-white ' to=''>SERVICES</Link><br />
                    <Link className='text-decoration-none text-white ' to=''>OUR WORK</Link><br />
                    <Link className='text-decoration-none text-white ' to=''>CONTAC US</Link>
                  </div>
                </div>

              </div>
              <div className="col-md-2  g-0">
                <div className="row">
                  <h3 className='text-white p-0 ' to=''>LINKS</h3>
                </div>
                <div className="row">
                  <div className=" g-0 ">
                    <Link className='text-decoration-none text-white ' to='/'>Home</Link><br />
                    <Link className='text-decoration-none text-white ' to='/aboutus/'>ABOUT US</Link><br />
                    <Link className='text-decoration-none text-white ' to='/services/'>SERVICES</Link><br />
                    <Link className='text-decoration-none text-white ' to='/ourwork/'>OUR WORK</Link><br />
                    <Link className='text-decoration-none text-white ' to='contactus'>CONTAC US</Link>
                  </div>
                </div>

              </div>
              <div className="col-md-5 offset-md-1  g-0">
                <div className="row">
                  <h3 className='text-white p-0 ' to=''>WORKING HOURS</h3>
                </div>
                <div className="row">
                  <div className="  g-0">
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
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/footer.css'
import logoimg from '../assets/images/footerlogo.svg'
export default function Footer() {
  return (
    <div className=' bg-black'>

      <div className="footer">
        <div className="row p-5  ">
          <div className="col-md-4 logo-dev ">
            <img className='img-fluid' src={logoimg} alt="" />
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
              
              <div className="col-md-3 offset-md-1  g-0">
                
                <h3 className='text-white ' to=''>SERVICES</h3>
              
                <ul style={{listStyle:'none',padding:0}}>
                  <li className='link-list'  style={{marginTop:30,}}><Link className='text-decoration-none text-white ' to=''>Home</Link></li>
                  <li className='link-list'  style={{marginTop:30}}><Link className='text-decoration-none text-white ' to=''>ABOUT US</Link></li>
                  <li className='link-list'  style={{marginTop:30}}><Link className='text-decoration-none text-white ' to=''>SERVICES</Link></li>
                  <li className='link-list'  style={{marginTop:30}}><Link className='text-decoration-none text-white ' to=''>OUR WORK</Link></li>
                  <li className='link-list'  style={{marginTop:30}}><Link className='text-decoration-none text-white ' to=''>CONTAC US</Link></li>
                </ul>
      
              </div>
              <div className="col-md-2  g-0 ">

              
                <h3 className='text-white ' to=''>LINKS</h3>
            
                <ul style={{listStyle:'none', padding:0}}>
                  <li className='link-list' style={{marginTop:30,}}> <Link className='text-decoration-none text-white ' to='/'>Home</Link> </li>
                  <li className='link-list' style={{marginTop:30,}}> <Link className='text-decoration-none text-white ' to='/aboutus/'>ABOUT US</Link> </li>
                  <li className='link-list' style={{marginTop:30,}}> <Link className='text-decoration-none text-white ' to='/services/'>SERVICES</Link> </li>
                  <li className='link-list' style={{marginTop:30,}}> <Link className='text-decoration-none text-white ' to='/ourwork/'>OUR WORK</Link> </li>
                  <li className='link-list' style={{marginTop:30,}}> <Link className='text-decoration-none text-white ' to='contactus'>CONTAC US</Link> </li>
                </ul>               
              </div>

              <div className="col-md-5 offset-md-1  g-0">


                <h3 className='text-white ' to=''>WORKING HOURS</h3>



                <ul style={{listStyle:'none', padding:0}} className='text-white '>
                  <li className='link-list' style={{marginTop:30,}}> Our support team is here to help
                  you 24/7</li>
                  <li className='link-list' style={{marginTop:30,}}> Monday-Friday: 8:30 AM - 5:30 PM</li>
                  <li className='link-list' style={{marginTop:30,}}>Saturday: 10:00 AM - 2:00 PM</li>
                  <li className='link-list' style={{marginTop:30,}}>Sunday: Closed</li>
                  <li className='link-list' style={{marginTop:30,}}>Our Help Desk: 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

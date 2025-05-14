import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Navbar() {

  const location = useLocation(); // Get the current location

  return (

    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid my-nav">
        <div className="briks  nav-left">
            <img className='img' src="images/Brick&Brush.svg" alt="" />
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0  ">
              <li class="nav-item nav-list-items">
                <Link className={`nav-link me-2 fs-6 ${location.pathname === "/" ? "active " : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link className={`nav-link me-2 fs-6 ${location.pathname === "/services/" ? "active " : ""}`} aria-current="page" to="/services/">Services</Link>
              </li>

              <li class="nav-item">
                <Link className={`nav-link me-2 fs-6 ${location.pathname === "/ourwork/" ? "active " : ""}`} to="/ourwork/">Our Work</Link>
              </li>
              <li class="nav-item">
                <Link className={`nav-link me-2 fs-6 ${location.pathname === "/aboutus/" ? "active " : ""}`} to="/aboutus/">About Us</Link>
              </li>
              <li class="nav-item">
                <Link className={`nav-link me-2 fs-6 ${location.pathname === "/contactus/" ? "active " : ""}`} to="/contactus/">Contac Us</Link>
              </li>
            </ul>

            <ul class="nav-right" >
            <li >
              7588 Central Parke Blvd,
            </li>
            <li className=''>
              Mason, OH 45040
            </li>
            <li className=''>
              +1 513 476 3822
            </li>
            </ul>
          </div>
        </div>
      </nav>


    </>

  )
}

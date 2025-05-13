import React from 'react'
import { Link,useLocation } from 'react-router-dom'


export default function Navbar() {

  const location = useLocation(); // Get the current location
  
  return (
    <section className=' '>
        <div className="row p-2 g-0 nav-left ">
          <div className="col-md-3 briks  ">
            <img className='img' src="images/Brick&Brush.svg" alt="logo" />
          </div>
          <div className="col-md-5 offset-md-1 navitems ">
            <nav className="navbar mt-2 navbar-expand-lg">
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <Link className={`nav-link me-2 fs-6 ${location.pathname === "/" ? "active " : ""}`} aria-current="page" to="/">Home</Link>

                    <Link className={`nav-link me-2 fs-6 ${location.pathname === "/services/" ? "active " : ""}`} aria-current="page" to="/services/">Services</Link>

                    <Link className={`nav-link me-2 fs-6 ${location.pathname === "/ourwork/" ? "active " : ""}`} to="/ourwork/">Our Work</Link>

                    <Link className={`nav-link me-2 fs-6 ${location.pathname === "/aboutus/" ? "active " : ""}`} to="/aboutus/">About Us</Link>

                    <Link className={`nav-link me-2 fs-6 ${location.pathname === "/contactus/" ? "active " : ""}`} to="/contactus/">Contac Us</Link>
                  </div>
                </div>
            </nav>
          </div>
          <div className="col-md-3 contact nav-right ">
            <p className=' ms-2 fs-6 mb-0 '>
              7588 Central Parke Blvd,
            </p>
            <p className=' ms-4 fs-6 mb-0'>
              Mason, OH 45040
            </p>
            <h5 className='ms-2 mt-0'>
              +1 513 476 3822
            </h5>
          </div>
        </div>
    </section>
   
  )
}

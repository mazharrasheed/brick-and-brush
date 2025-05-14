import React from 'react'

import contacimag from '../assets/images/contactus.svg'

export default function ContactForm() {
    return (
        <div className=' contactus '>
            <img  class="img-fluid image"  src={contacimag} alt="image" />
            <div className="overlay"></div>
            <div  className=" from-header  ">
                <p className=' text-center  fw-bold z-3'>
                    ARE YOU INTRESTED IN OUR SERVICES ? <br />
                    THEN LEAVE A REQUEST AND WE WIL CONTACT YOU
                </p>
            </div>

            <div className=" row d-flex form-map z-3">
                <div className="col-md-5 form-div ms-5">
                <h1 className='fw-bold text-white mt-3'>CONTACT WITH US</h1>
                <h6 className='text-white '> WE ARE READY TO HELP YOU WITH <br /> YOUR HOME RENOVATIONWE PROJECT</h6>
                    <form action="" className=''>
                        <input className='form-control mb-4' type="text" placeholder='NAME' />
                        <input className='form-control mb-4' type="email" placeholder='EMAIL' />
                        <textarea className="form-control mb-4" rows="4" placeholder='MESSAGE'></textarea>
                        <input className='btn btn-warning' type="submit" value="GET STARTED" />
                    </form>
                </div>
                <div style={{paddingRight:"90px",position:'relative', left:"70px"}} className=" ms-5 col-md-6 map-div z-3">
                    <div className=" map ">
                    <iframe src="https://www.google.com/" width="100%" height="390" frameborder="0" allowfullscreen></iframe>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

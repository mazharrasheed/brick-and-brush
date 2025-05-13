import React from 'react'
import '../assets/css/contactform.css'

import contacimag from '../assets/images/contactus.svg'


export default function ContactForm() {
    return (
        <div className=' contactus'>

            <img class='img-fluid image'  src={contacimag} alt='image' />
            <div className='overlay'></div>
            <div className='row from-header mt-3' >
                <p className=' text-center text-white fw-bold z-3' >
                    ARE YOU INTRESTED IN OUR SERVICES ? <br />
                    THEN LEAVE A REQUEST AND WE WIL CONTACT YOU
                </p>
            </div>
            <div className='row form-map z-3'>
                <div className="col-md-5 form-div">
                <h1 className='fw-bold text-white'>CONTACT WITH US</h1>
                <h6 className='text-white'> WE ARE READY TO HELP YOU WITH <br /> YOUR HOME RENOVATIONWE PROJECT </h6>
                    <form action='' className=''>
                        <input className='form-control mb-3' type="text" placeholder='NAME' />
                        <input className='form-control mb-3' type="email" placeholder='EMAIL' />
                        <textarea className='form-control mb-3' rows="4" placeholder='MESSAGE'></textarea>
                        <input className='btn btn-warning' type="submit" value="GET STARTED" />
                    </form>
                </div>
                <div className="col-md-6 offset-md-1 map-div z-3">
                    <div className="row g-0 ms-5 border ">
                    <iframe src="https://www.google.com/" width="100%" height="380" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
export default function OurWorkMain() {
    return (

        <div className=' mt-4' >
            <div className='row mt-5 our-work '>
                <h2 className=''> Our WORK  <span className=' fs-6'><Link>All WORKS </Link></span></h2>
            </div>
            <div className="ps-5 pe-5 pb-5 images">
            <div className='row p-3 '>
                <div className="col-md-6 p-3 pb-0">
                    <img class="img-fluid" src="images/kitchen1-ourwork.svg" alt="" />
                </div>
                <div className="col-md-6 p-3">
                    <img class="img-fluid" src="images/kitchen-ourwork.svg" alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

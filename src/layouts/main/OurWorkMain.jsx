import React from 'react'
import { Link } from 'react-router-dom'
export default function OurWorkMain() {
    return (

        <div className='container full-container mt-4' >
            <div className='row mt-5 titlerow '>
                <h2 className=''> OUR WORK  <span className=' fs-6'><Link>ALL WORKS </Link></span></h2>
            </div>
            <div className="container">
            <div className='row p-3 ourwork '>
                <div className="col-md-6 p-3 pb-0">
                    <img class="img-fluid" src="/images/kitchen1-ourwork.svg" alt="" />
                </div>
                <div className="col-md-6 p-3">
                    <img class="img-fluid" src="/images/kitchen-ourwork.svg" alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

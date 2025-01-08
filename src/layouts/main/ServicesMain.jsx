import React from 'react'
import { Link } from 'react-router-dom'
export default function ServicesMain() {
    return (

        <div className='container full-container mt-4' >
            <div className='row mt-5 titlerow'>
                <h2 className='z-3'> SERVICES  <span className='fs-6'><Link>ALL SERVICES </Link></span></h2>
            </div>
            <div className="container full-container">
            <div className='row p-3 services '>
                <div className="col-md-3 p-3 pb-0">
                    <img src="/images/painting-a-deck-vs-staining .svg" alt="" />
                </div>
                <div className="col-md-3 p-3">
                    <img src="/images/exterior-house-painting-in-winter.svg" alt="" />
                </div>
                <div className="col-md-3  p-3">
                    <img src="/images/painting-a-fence-vs-staining .svg" alt="" />
                </div>
                <div className="col-md-3 p-3">
                    <img src="/images/clean-garage.svg" alt="" />
                </div>
                <div className="col-md-3 p-3">
                    <img src="/images/painting-a-deck-vs-staining .svg" alt="" />
                </div>
                <div className="col-md-3 p-3">
                    <img src="/images/exterior-house-painting-in-winter.svg" alt="" />
                </div>
                <div className="col-md-3  p-3">
                    <img src="/images/painting-a-fence-vs-staining .svg" alt="" />
                </div>
                <div className="col-md-3 p-3">
                    <img src="/images/clean-garage.svg" alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

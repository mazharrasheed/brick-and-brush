import React from 'react'
import { Link } from 'react-router-dom'

import servicesimg1 from '../../assets/images/painting-a-deck-vs-staining.svg';
import servicesimg2 from '../../assets/images/exterior-house-painting-in-winter.svg';
import servicesimg3 from '../../assets/images/painting-a-fence-vs-staining.svg';
import servicesimg4 from '../../assets/images/clean-garage.svg';
import servicesimg5 from '../../assets/images/painting-a-deck-vs-staining.svg';
import servicesimg6 from '../../assets/images/exterior-house-painting-in-winter.svg';
import servicesimg7 from '../../assets/images/painting-a-fence-vs-staining.svg';
import servicesimg8 from '../../assets/images/clean-garage.svg';


export default function ServicesMain() {
    return (

        <div className='container full-container mt-4' >
            <div className='row mt-5 titlerow'>
                <h2 className='z-3'> SERVICES  <span className='fs-6'><Link>ALL SERVICES </Link></span></h2>
            </div>
            <div className="container full-container">
            <div className='row p-3 services '>
                <div className="col-md-3 p-3 pb-0">
                    <img src={servicesimg1} alt="" />
                </div>
                <div className="col-md-3 p-3">
                    <img src={servicesimg2} alt="" />
                </div>
                <div className="col-md-3  p-3">
                    <img src={servicesimg3} alt="" />
                </div>
                <div className="col-md-3 p-3">
                    <img src={servicesimg4} alt="" />
                </div>
                <div className="col-md-3 p-3">
                    <img src={servicesimg5} alt="" />
                </div>
                <div className="col-md-3 p-3">
                    <img src={servicesimg6} alt="" />
                </div>
                <div className="col-md-3  p-3">
                    <img src={servicesimg7} alt="" />
                </div>
                <div className="col-md-3 p-3">
                    <img src={servicesimg8} alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

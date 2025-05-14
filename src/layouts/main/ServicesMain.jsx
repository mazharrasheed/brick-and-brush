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

        <div  className=' mt-4 mb-3' >
            <div className='row p-5 pb-0 titlerow'>
                <h2 className='z-3 ms-2'> SERVICES  <span className='fs-6 me-4'><Link>ALL SERVICES </Link></span></h2>
            </div>
            <div className="">
            <div  className='row p-5 pt-0 services '>
                <div className="col-md-3 p-5 pb-0 servis-item">
                    <img src="images/painting-a-deck-vs-staining .svg" alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src="images/exterior-house-painting-in-winter.svg" alt="" />
                </div>
                <div className="col-md-3  p-5 servis-item">
                    <img src="images/painting-a-fence-vs-staining .svg" alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src="images/clean-garage.svg" alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src="images/painting-a-deck-vs-staining .svg" alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src="images/exterior-house-painting-in-winter.svg" alt="" />
                </div>
                <div className="col-md-3  p-5 servis-item">
                    <img src="images/painting-a-fence-vs-staining .svg" alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src="images/clean-garage.svg" alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

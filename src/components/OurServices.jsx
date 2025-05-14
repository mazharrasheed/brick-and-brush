import React from 'react'
import { Link } from 'react-router-dom'

import servicesimg1 from '../assets/images/painting-a-deck-vs-staining.svg';
import servicesimg2 from '../assets/images/exterior-house-painting-in-winter.svg';
import servicesimg3 from '../assets/images/painting-a-fence-vs-staining.svg';
import servicesimg4 from '../assets/images/clean-garage.svg';


export default function OurServices() {
    return (

        <div  className=' mt-4' >
            <div className="">
            <div  className='row p-5 pt-0 services '>
                <div className="col-md-3 p-5 pb-0 servis-item">
                    <img src={servicesimg1} alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src={servicesimg2} alt="" />
                </div>
                <div className="col-md-3  p-5 servis-item">
                    <img src={servicesimg3}alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src={servicesimg4} alt="" />
                </div>
                <div className="col-md-3 p-5 pb-0 servis-item">
                    <img src={servicesimg1} alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src={servicesimg2} alt="" />
                </div>
                <div className="col-md-3  p-5 servis-item">
                    <img src={servicesimg3}alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src={servicesimg4} alt="" />
                </div>
                <div className="col-md-3 p-5 pb-0 servis-item">
                    <img src={servicesimg1} alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src={servicesimg2} alt="" />
                </div>
                <div className="col-md-3  p-5 servis-item">
                    <img src={servicesimg3}alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src={servicesimg4} alt="" />
                </div>
                <div className="col-md-3 p-5 pb-0 servis-item">
                    <img src={servicesimg1} alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src={servicesimg2} alt="" />
                </div>
                <div className="col-md-3  p-5 servis-item">
                    <img src={servicesimg3}alt="" />
                </div>
                <div className="col-md-3 p-5 servis-item">
                    <img src={servicesimg4} alt="" />
                </div>
            
            </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

import servicesimg1 from '../assets/images/service-1.svg';
import servicesimg2 from '../assets/images/service-2.svg';
import servicesimg3 from '../assets/images/service-3.svg';
import servicesimg4 from '../assets/images/service-4.svg';


const services = [
    { id: 1, image: servicesimg1, label: 'Painting Deck vs Staining' },
    { id: 2, image: servicesimg2, label: 'Exterior Painting in Winter' },
    { id: 3, image: servicesimg3, label: 'Painting Fence vs Staining' },
    { id: 4, image: servicesimg4, label: 'Clean Garage' },
    { id: 5, image: servicesimg1, label: 'Painting Deck vs Staining' },
    { id: 6, image: servicesimg2, label: 'Exterior Painting in Winter' },
    { id: 7, image: servicesimg3, label: 'Painting Fence vs Staining' },
    { id: 8, image: servicesimg4, label: 'Clean Garage' },
];



export default function OurServices({text1,text2}) {
   return (
        <div className='mt-4 mb-3'>
            <div className='row p-5 pb-0 titlerow'>
                <h2 className='z-3 ms-2'>
                    {text1} <span className='fs-6 me-4'><Link to="/services">{text2}</Link></span>
                </h2>
            </div>
            <div className='row p-5 pt-0 services'>
                {services.map(service => (
                    <div key={service.id} className="col-md-3 p-5 servis-item">
                        <Link to={`/services/${service.id}`}>
                            <img
                                src={service.image}
                                alt={service.label}
                                style={{ cursor: 'pointer' }}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

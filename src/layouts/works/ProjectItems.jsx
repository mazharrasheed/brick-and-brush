import React from 'react'

import image1 from '../../assets/images/clean-garage.png'
import image2 from '../../assets/images/furniture-g37e8baef6_1920 4.png'
import image3 from '../../assets/images/home-gaa8c21acc_1920 1.png'
import image4 from'../../assets/images/kitchen-g5ebf9be1a_1920 2.png'





export default function ProjectItems() {
  return (
  

    <>

 <div  className=' project-items mt-4' >
            <div className="">
            <div  className='row pt-0 services '>
                <div className="col-md-4 p-5 pb-0 servis-item">
                    <img src={image1} alt="" />
                </div>
                <div className="col-md-4 p-5 servis-item">
                    <img src={image2} alt="" />
                </div>
                <div className="col-md-4  p-5 servis-item">
                    <img src={image3}alt="" />
                </div>
                <div className="col-md-4 p-5 pb-0 servis-item">
                    <img src={image4} alt="" />
                </div>
                <div className="col-md-4 p-5 servis-item">
                    <img src={image3} alt="" />
                </div>
                <div className="col-md-4  p-5 servis-item">
                    <img src={image2}alt="" />
                </div>
                <div className="col-md-4 p-5 pb-0 servis-item">
                    <img src={image1} alt="" />
                </div>
                <div className="col-md-4 p-5 servis-item">
                    <img src={image2} alt="" />
                </div>
                <div className="col-md-4  p-5 servis-item">
                    <img src={image4}alt="" />
                </div>
          
            </div>
            </div>
        </div>

    </>



  )
}

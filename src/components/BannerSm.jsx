import React from 'react'

import '../assets/css/bannersm.css'

export default function BannerSm({image,text1,text2}) {
    return (
        <div className="container full-container bannersm">
            <div
                className="image pt-4"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "400px",
                }}
            >

                <h1 className='h1 text-black  ps-5 mt-3  '>{text1}</h1>
                <h3 className='h3  text-black ps-5 '>{text2}</h3>
                <div class="container full-container ">
                    <div class="row mt-4 ps-3 me-3 ">
                        <div class="col ">
                            <div class="card text-white " style={{ width: '13rem' }}>
                                <div class="card-body">
                                <h1 >1</h1>
                                <p className='fs-5 '>INITIAL <br /> CONSULTATION </p>
                                </div>
                            </div>
                        </div>
                        <div class="col ">
                            <div class="card text-white" style={{ width: '13rem' }}>
                                <div class="card-body">
                                <h1 >2</h1>
                                <p className='fs-5 '>CONCEPT AND <br /> FEASIBILITY </p>
                                </div>
                            </div>
                        </div>
                        <div class="col ">
                            <div class="card text-white" style={{ width: '13rem' }}>
                                <div class="card-body">
                                <h1 >3</h1>
                                <p className='fs-5 '> WORKING <br /> DRAWING AND  <br /> COSTING</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card text-white" style={{ width: '13rem' }}>
                                <div class="card-body">
                                <h1 >4</h1>
                                <p className='fs-5 '> CONSTRUCTION  <br />  STAGE </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card text-white" style={{ width: '13rem' }}>
                                <div class="card-body">
                                <h1 >5</h1>
                                <p className='fs-5 '> YOUR FINISHED   <br />  HOME </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function BannerSm() {
    return (
        <div className="">
            <div className="row mt-5  ">
                <div class="baneerSm">

                    <img src="images/architecture.svg" class="img-fluid" alt="Architecture" />
                    <h1 className='h1 m-5 mb-0'>YOUR RENOVATION WILL RUN QUAILITAIVELY</h1>
                    <h3 className='h3 ms-5'>THANKS TO OUR 5 STEP PROCESS</h3>

                    <div className="row justify-content-center text-white ">
                        <div className="col-md-2 m-3 card-bg">
                            <h1 >1</h1>
                            <p className='fs-4 '>INITIAL <br /> CONSULTATION </p>
                        </div>
                        <div className="col-md-2 m-3 card-bg">
                            <h1 >2</h1>
                            <p className='fs-4 '>CONCEPT AND <br /> FEASIBILITY </p>
                        </div>
                        <div className="col-md-2 m-3 card-bg">
                            <h1 >3</h1>
                            <p className='fs-4 '> WORKING <br /> DRAWING AND  <br /> COSTING</p>
                        </div>
                        <div className="col-md-2 m-3 card-bg">
                            <h1 >4</h1>
                            <p className='fs-4 '> CONSTRUCTION  <br />  STAGE </p>
                        </div>
                        <div className="col-md-2 m-3 card-bg">

                            <h1 >5</h1>
                            <p className='fs-4 '> YOUR FINISHED   <br />  HOME </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="pt-4"
                style={{
                    backgroundImage: "url('images/architecture.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "400px",
                }}
            >
                <h1 className='h1 text-white ps-5 mt-3  '>YOUR RENOVATION WILL RUN QUAILITAIVELY</h1>
                <h3 className='h3 text-white ps-5 '>THANKS TO OUR 5 STEP PROCESS</h3>
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

import React from 'react'

export default function ContactForm() {
    return (
        <div className=' contactus pt-5'
        style={{
            backgroundImage: "url('/images/contactus.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "600px",
        }}
        >
          
            <div className="row from-header ">
                <p className=' text-center text-white fw-bold '>
                    ARE YOY INTRESTED IN OUR SERVICES ? <br />
                    THEN LEAVE A REQUEST AND WE WIL CONTACT YOU
                </p>
            </div>

            <div className="row p-5 ">
                <div className="col-md-5 form-div">
                <h1 className='fw-bold text-white'>CONTACT WITH US</h1>
                <h6 className='text-white'> WE ARE READY TO HELP YOU WITH YOUR HOME RENOVATIONWe PROJECT</h6>
                    <form action="" className=''>
                        <input className='form-control mb-3' type="text" placeholder='NAME' />
                        <input className='form-control mb-3' type="email" placeholder='EMAIL' />
                        <textarea className="form-control mb-3" rows="4" placeholder='MESSAGE'></textarea>
                        <input className='btn btn-warning' type="submit" value="GET STARTED" />
                    </form>
                </div>

                <div className="col-md-6 offset-md-1 map-div ">
                    <div className="row g-0 ms-5">
                    <iframe src="http://localhost:5173/" width="100%" height="380" frameborder="0" allowfullscreen></iframe>
                    </div>
                
                </div>
            </div>
            {/* <img src="images/contactus.svg" class="img-fluid" alt="" /> */}



        </div>
    )
}

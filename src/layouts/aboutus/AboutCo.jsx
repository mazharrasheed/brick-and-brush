import React from 'react'
import image1 from '../../assets/images/Brick&Brush.svg'
export default function AboutCo() {
    return (
        <div className=' aboutco '

        >
            <div className="container ">
                <div className="row mt-5">
                    <p className='p1'>
                        ABOUT COMPANY
                    </p>
                </div>

                <div className="row mt-5 ">
                    <div className="col-md-6 justify-content-center p-5">
                        <img className=" logo-image " src={image1} alt="briklogo" height={170} />
                    </div>
                    <div className="col-md-6 justify-content-center g-0">
                        <p className='p2'>
                            ON THE OTHER HAND ,THE <br />FRAMEWORK ADN PLACE OF<br />
                            PERSONNL TRAINGIN REQUIRE US TO <br /> ANALYZE THE PERSONNEL TRAINING <br />SYSTEM, IT CORESPONDS TO <br /> PRESSING NEEDS. LIKEWISE ,THE <br /> BEGINNING </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

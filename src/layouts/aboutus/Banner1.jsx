import React from 'react'

export default function Banner1() {
    return (
        <div className=' banner1 '
            style={{
                backgroundImage: "url('images/aboutus/banner1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "300px",
            }}
        >
            <div className="container">
            <p className='p1 text-white  '>BRICK AND BRUSH INC </p>
            <p className='p2 text-white ms-4'>
            ABOUT COMPANY, WHAT WER DO, <br />
            WHY YOU’LL BE HAPPY YOU CHOSE US
            </p>
        </div>
        </div>
    )
}

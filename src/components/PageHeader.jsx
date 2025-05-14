import React from 'react'

export default function PageHeader({image,text1,text2,text3}) {
    return (
        <div className=' banner1 '
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "300px",
            }}
        >
            <div className="container">
            <p className='p1 text-white  '>{text1} </p>
            <p className='p2 text-white ms-4'>
            {text2} <br />
            {text3}
            </p>
        </div>
        </div>
    )
}

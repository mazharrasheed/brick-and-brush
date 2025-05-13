import React from 'react'


import image1 from '../../assets/images/kitchen1-ourwork.svg'


export default function Banner2() {
    return (
        <div className=' banner2 mt-4 '
            style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "400px",
                marginBottom:"20px"
            }}
        >
            <div className="container">
            <div style={{height:"20px"}}> </div>
            <h1 className='p1 mt-5 '> WHAT WE DO </h1>
            <h5 className='p3 '>
            OF DAILY WORK ON THE FORMATION OF A POSITION REQUIRES US TO <br />
            ANALYZE THE APPROPRIATE ACTIVATION CONDITIONS. THE TASK OF THE <br />
            ORGANIZATION, IN PARTICULAR THE BEGINNING OF DAILY WORK ON THE <br />
            FORMATION OF A POSITION, CONTRIBUTES TO THE PREPARATION AND <br />
            IMPLEMENTATION OF FURTHER DIRECTIONS OF DEVELOPMENT.
            </h5>
        </div>
        </div>
    )
}

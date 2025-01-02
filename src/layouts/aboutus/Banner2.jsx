import React from 'react'

export default function Banner2() {
    return (
        <div className='container full-container banner2 mt-4 '
            style={{
                backgroundImage: "url('/images/aboutus/banner2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "400px",
            }}
        >
            <div className="container">
            <p className='p1 text-white  '> WHAT WE DO </p>
            <p className='p3 text-white ms-4'>
            OF DAILY WORK ON THE FORMATION OF A POSITION REQUIRES US TO <br />
            ANALYZE THE APPROPRIATE ACTIVATION CONDITIONS. THE TASK OF THE <br />
            ORGANIZATION, IN PARTICULAR THE BEGINNING OF DAILY WORK ON THE <br />
            FORMATION OF A POSITION, CONTRIBUTES TO THE PREPARATION AND <br />
            IMPLEMENTATION OF FURTHER DIRECTIONS OF DEVELOPMENT.
            </p>
        </div>
        </div>
    )
}

import { useParams } from 'react-router-dom';
import image from '../assets/images/service-1.svg'
// import { Link, } from 'react-router-dom'


import BannerSm from './BannerSm'
import ContactForm from './ContactForm';
import smallBannerImg from '../assets/images/architecture.svg';
import headerImg from '../assets/images/living-room.png';
import PageHeader from './PageHeader'

const images = import.meta.glob('../assets/images/*.svg', { eager: true });
console.log(image)

export default function ServiceDetail() {
    const { id } = useParams();
    const imagePath = `../assets/images/service-${id}.svg`;
    const image = images[imagePath];

    const text1 = 'DECK PAINTING, STAINING'
    const text2 = 'THE EASY RELIABLE WAY'
    const text3 = 'TO TAKE CARE OF YOU HOME'
    const text4 = 'YOUR RENOVATION WILL RUN QUAILITAIVELY'
    const text5 = 'THANKS TO OUR 5 STEP PROCESS'

    // You could use `id` to fetch detail from backend or use a local data array
    return (
        <>
<div className='mb-5'>
<PageHeader image={headerImg} text1={text1} text2={text2} text3={text3}></PageHeader>
</div>
    

            <div className='row  service-detail   '>
                <h1 className='mb-5'>Service Details</h1>
                <div className='col-md-6'>
                    {/* Example: Load image and description here */}
                    <img className='detail-img' src={image.default} alt={`Service ${id}`} />
                    {/* <h1 className='mt-5'>
                        <Link className={`nav-link me-2 fs-6 ${location.pathname === "/services/" ? "active " : ""}`} aria-current="page" to="/services/">Back to Services</Link>
                    </h1> */}
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>

                    <p className='fs-1 '>
                    On the other hand, the framework and place of personnel training require us to analyze the personnel training system, it corresponds to pressing needs. Likewise, the beginning of daily work on the formation of a position requires us to analyze the appropriate 
                    On the other hand, the framework and place of personnel training require us to analyze the personnel training system, it corresponds to pressing needs. Likewise, the beginning of daily work on the formation of a position requires us to analyze the appropriate 
                    </p>
                </div>

            </div>

            <div className='mt-5 mb-5' >

                <BannerSm image={smallBannerImg} text1={text4} text2={text5}></BannerSm>
            </div>


            <div>
                <ContactForm></ContactForm>
            </div>
        </>

    );
}
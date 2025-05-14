import { useParams } from 'react-router-dom';
import image from '../assets/images/service-1.svg'
import { Link,} from 'react-router-dom'
const images = import.meta.glob('../assets/images/*.svg', { eager: true });
console.log(image)

export default function ServiceDetail() {
    const { id } = useParams();
    const imagePath = `../assets/images/service-${id}.svg`;
    const image = images[imagePath];

    // You could use `id` to fetch detail from backend or use a local data array
    return (
        <div className="container mt-5 mb-5">
            <h1>Service Details</h1>
            <p>You are viewing details for service ID: {id}</p>
            {/* Example: Load image and description here */}
            <img src={image.default} alt={`Service ${id}`} />
            <h1 className='mt-5'>
                <Link className={`nav-link me-2 fs-6 ${location.pathname === "/services/" ? "active " : ""}`} aria-current="page" to="/services/">Back to Services</Link>
            </h1>
        </div>
        
    );
}
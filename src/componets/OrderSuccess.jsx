
import { Link, useParams } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import './OrderSuccess.css'
export default function OrderSuccess() {
    const { orderId } = useParams();

    return (
        <section className='success'>
            <h1 className='success__title'>
                Muchas Graciass!!
            </h1>
            <div>
                <p className='success__text'>
                   La id de tu orden es: <span className='bold'>{orderId}</span> 
                </p>

            </div>

            <Link to='/' className='success__link'>
                <button className='success__button'>
                    Volver a la tienda
                    <FaHome className='success__button__icon'/>
                </button>
            </Link>
        </section>
    )
}
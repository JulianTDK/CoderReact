
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { FaLeaf, FaAngleLeft, FaAngleRight, FaCertificate } from 'react-icons/fa';
import { useCartContext } from '../Context/CartContext';

export default function ItemDetail({producto : {id,src,title,alt,description,price,stock}}) {
    const {addToCart, isInCart} = useCartContext()

    function handleOnAdd(quantity) {
        addToCart({id,src,title,alt,description,price, stock, quantity})
    }
    
    return (
        <section className='detail'>
            <img 
                src={src}
                alt={title}
                className='detail__img' 
            />
            <div>
                <div className='detail__description'>
                    <div className="detail__description__title">
                        <h1 className='detail__title'>
                            {title}
                        </h1>
                    </div>
                    <div className='detail__information'>
                        <p>
                            {description}
                        </p>

                    </div>
                    <div className='detail__quantity'>
                        <h2 className='detail__price'>
                            ${price ? price.toFixed(2) : <span>Cargando...</span>}
                        </h2>

                        <p className='detail__stock'>
                            En stock: {stock}
                        </p>
                    </div>
                </div>
                {
                    isInCart(id)
                    ?   <Link to='/carrito'>
                            <button className='detail__cart__button'>
                                Ir al carrito
                                <FaAngleRight className='detail__cart__icon'/>
                            </button>
                        </Link>
                    : stock > 0 
                        ?   <ItemCount stock={stock} onAdd={handleOnAdd} /> 
                        :   <p className='detail__empty__stock'>
                                No puedes comprar esto ya no hay stock
                            </p>
                }
                <Link to='/all'>
                    <button className='detail__home__button'>
                        <FaAngleLeft className='detail__home__icon'/>
                        Seguir comprando
                    </button>
                </Link>
            </div>
        </section>
    )
}

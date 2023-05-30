import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { FaArrowLeft, FaLeaf, FaTrash, FaBoxOpen, FaAngleRight } from 'react-icons/fa';
import './Cart.css';
export default function Cart() {
    const { cartList, deleteItem, getTotalPrice, getItemQuantity, clearCartList } = useCartContext()

    return (
        <section className='cart'>
            <div className='cart__head'>
                <Link to={-1}>
                    <FaArrowLeft className='cart__head__back'/>
                </Link>

            </div>

            {
                cartList.map(it => {
                    return(
                    <div className='cart__item' key={it.id}>
                        <img 
                            src={it.src}
                            alt={`${it.title} sushi`}
                            className='cart__item__img' 
                        />
                        <div className='cart__item__description'>
                            <div>
                                <div className='cart__item__head'>

                                </div>
                                <div className='cart__item__price'>
                                    <p>
                                        Price: ${it.price}
                                    </p>
                                    <p>
                                        Sub-total: ${it.price * it.quantity}
                                    </p>
                                </div>
                            </div>
                            <div className='cart__units'>
                                <div>
                                   
                                    <p className='cart__units__quantity'>
                                    Cantidad: {it.quantity} 
                                    </p>
                                </div>
                                <button onClick={() => deleteItem(it.id)} className='cart__units__button'>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            {
                cartList.length === 0 
                ?  <div className='cart__empty'>
                    <h3>Tu carrito esta vacio</h3>
                    <Link to='/'>
                        <button>
                            Regresar a la tienda
                        </button>
                    </Link>
                    </div>
                :   <>
                        <div className='cart__price'>
   
 
                            <h3>
                                Total:
                            </h3>
                            <p className='cart__price__total'>
                                ${getTotalPrice()}
                            </p>
                        </div>
                        <div className='cart__buttons'>
                            <button className='cart__clear__button' onClick={() => clearCartList()}>
                                Vaciar Carrito
                                <FaBoxOpen 
                                className='cart__clear__icon'/>
                            </button>
                            <Link to='/checkout'>
                                <button className='cart__checkout__button'>
                                    Finalizar compra
                                    <FaAngleRight 
                                    className='cart__checkout__icon'/>
                                </button>
                            </Link>
                        </div>
                    </>
        }
        </section>
    )
}

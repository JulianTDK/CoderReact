import { useCartContext } from '../context/CartContext'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function CartWidget() {
    const { getItemQuantity } = useCartContext()

    return (

        <Link to='/carrito'>
        <div className='cart__widget'>
            <FaShoppingBag className='nav__cart__button'/>
            {getItemQuantity() > 0 && 
                <span className='cart__quantity'>
                    {getItemQuantity()}
                </span>
            }
        </div>
        </Link>
    )
}

export default CartWidget
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FaCheck, FaArrowLeft, FaLeaf } from 'react-icons/fa';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useCartContext } from '../context/CartContext';
import CheckoutInputs from './CheckoutInputs';
import './Checkout.css';

export default function Checkout() {
    const { cartList, getTotalPrice, getItemQuantity, clearCartList } = useCartContext();
    const [orderId, setOrderId] = useState('');
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        emailRepeat: '',
        phone: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'fullName',
            type: 'text',
            placeholder: 'Juan Almendra',
            errorMessage: "Tu nombre debe tener almenos 5 caracteres",
            label: 'Nombre completo',
            pattern: ".{6,}",
            required: true
        },
        {
            id: 2,
            name: 'phone',
            type: 'text',
            placeholder: '000-000-0000',
            errorMessage: "Tu numero de telefono debe ser de 10 numeros en el formato : 000-000-0000.",
            label: 'Telefono',
            pattern: "^(1s?)?((([0-9]{3}))|[0-9]{3})[s-]?[0-9]{3}[s-]?[0-9]{4}$",
            required: true
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeholder: 'email@example.com',
            errorMessage: "Tu email debe tener el formato siguiente formato: email@example.com",
            label: 'Email',
            pattern: "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
            required: true
        },
        {
            id: 4,
            name: 'emailRepeat',
            type: 'email',
            placeholder: 'email@example.com',
            errorMessage: "Los Emails no son iguales.",
            label: 'Confirmar Email',
            pattern: user.email,
            required: true
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        const order = {
            buyer: {
                name: user.fullName,
                email: user.email,
                phone: user.phone
            },
            items: cartList.map(it=>({id: it.id, name: it.title, price: it.price, quantity: it.quantity})),
            total: getTotalPrice(),
            date: serverTimestamp()
        }
        const emailControl = new RegExp("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
        const phoneControl = new RegExp("^(1s?)?((([0-9]{3}))|[0-9]{3})[s-]?[0-9]{3}[s-]?[0-9]{4}$");

        if(user.fullName.length <= 5 || !phoneControl.test(user.phone) || user.email !== user.emailRepeat || !emailControl.test(user.email) || cartList.length === 0) {
            return false
        }

        const db = getFirestore();
        const ordersCollection = collection(db, 'ordenes')
        addDoc(ordersCollection, order)
        .then(({ id }) => {
            setOrderId(id);
            clearCartList()
        })
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    return (
        <>
        <section className='checkout'>
            <div className='checkout__head'>
                <Link to='/carrito'>
                    <FaArrowLeft className='checkout__head__back'/>
                </Link>
                <h1 className='checkout__title'>
                    Checkout
                </h1>
            </div>
            <form className='checkout__form'>
                <div className='checkout__inputs'>
                    {
                        inputs.map((input) => (
                            <CheckoutInputs 
                                key={input.id} 
                                {...input} 
                                value={user[input.name] || ''} 
                                onChange={onChange}
                            />
                        ))
                    }
                </div>
                <button onClick={handleSubmit} className='checkout__submit__button' type='submit'>
                    Finalizar Orden
                    <FaCheck 
                    className='checkout__submit__icon' />
                </button>
            </form>
        </section>
        <section className='checkout__cart'>
                <h1 className='checkout__cart__title'>
                    Carrito
                </h1>

                {
                    cartList.map(it => {
                        return(
                        <div className='cart__item' key={it.id}>
                            <img 
                                src={it.src}
                                alt={`${it.name} sushi`}
                                className='checkout__cart__img' 
                            />
                            <div className='checkout__cart__description'>
                                <div>

                                    <div className='cart__item__price'>
                                        <p>
                                            Precio: ${it.price}
                                        </p>
                                    </div>
                                </div>
                                <div className='cart__units'>
                                    <div>
                                        <p className='cart__units__quantity'>
                                            Cantidad {it.quantity} 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                
            {orderId ? <Navigate to={'/order/' + orderId} /> : ''}
        </section>
    </>
    )
}
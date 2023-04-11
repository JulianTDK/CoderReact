
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './CartWidget'
import CartWidget from './CartWidget'

function NavBar () {

    return (
     
        <nav>
            <div className="navbar-container">
                <a className="navbar-titulo" href="#">FancyClothes</a>

                <ul className="navbar-list">
                    <li><a href="#">Mi Carrito</a></li>
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#">Mi Cuenta</a></li>
                    
                </ul>

               
                <CartWidget />
            


            
            </div>
        </nav>
    
    )
}

export default NavBar
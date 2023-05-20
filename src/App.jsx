import React from 'react';
import Navbar from './componets/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './componets/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import ItemDetailContainer from './componets/ItemDetailContainer';
import Cart from './componets/Cart.jsx';
import { CartProvider } from './Context/CartContext';
import Checkout from './componets/Checkout.jsx';
import OrderSuccess from './componets/OrderSuccess.jsx';







function App() {
  return (
    <BrowserRouter>

  <CartProvider>

    <Navbar />
     <Routes>

      <Route path='/' element={<ItemListContainer />} />
      <Route path='/categoria/:cid/' element={<ItemListContainer />} />
      <Route path='/item/:pid/' element={<ItemDetailContainer />} />      
      <Route path='/carrito' element={<Cart/>} />
      <Route path='/checkout' exact element={<Checkout />} />
      <Route path={'/order/:orderId'} element={<OrderSuccess />} />
      <Route path='*' element={<Navigate to='/' />} />

    </Routes>
    
  </CartProvider>

    </BrowserRouter>
  );
}

export default App;

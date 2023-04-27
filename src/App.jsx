import React from 'react';
import Navbar from './componets/Navbar.jsx';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Router} from "react-router-dom";
import ItemListContainer from './componets/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ItemDetailContainer from './componets/ItemDetailContainer';
import CartWidget from './componets/CartWidget.jsx';





function App() {
  return (
    <BrowserRouter>  
        <Navbar />
     <Routes>

      <Route path='/' element={<ItemListContainer />} />
      <Route path='/categoria/:cat/' element={<ItemListContainer />} />
      <Route path='/item/:id/' element={<ItemDetailContainer />} />      
      <Route path='/cart' element={<CartWidget />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;

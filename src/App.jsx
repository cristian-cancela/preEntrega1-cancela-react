import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList';
import CategoryFilter from './components/CategoryFilter';
import ItemDetailContainer from './components/ItemDetailsContainer';
import Cart from './components/cart';
import { CartProvider } from './components/CartContext';





function App() {
  return (
   
   
      
      <CartProvider>

    <div>
      <BrowserRouter>
        <nav>
          <NavBar />
        </nav>
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="¡Bienvenido a Sale!" />} />
          <Route exact path="/productos" element={<ItemList />} />
          <Route exact path="/producto/:productoId" element={<ItemDetailContainer />} />
          <Route exact path="/productos/hombres" element={<CategoryFilter category="hombres" />} />
          <Route exact path="/productos/mujeres" element={<CategoryFilter category="mujeres" />} />
          <Route exact path="/productos/sale" element={<CategoryFilter category="sale" />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Producto no encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
    </CartProvider>
  );
}

export default App;

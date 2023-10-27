import React from 'react';
import NavBar from './layout/NavBar';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './pages/ItemList';
import CategoryFilter from './layout/CategoryFilter';
import ItemDetailContainer from './pages/ItemDetailsContainer';
import Cart from './pages/cart';
import { CartProvider } from './context/CartContext';
import FinalizarCompra from './pages/FinalizarCompra';

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
            <Route exact path="/FinalizarCompra" element={<FinalizarCompra />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>Producto no encontrado</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;

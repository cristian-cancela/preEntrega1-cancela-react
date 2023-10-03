import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailsContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavBar />
        </nav>
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="¡Bienvenido a Sale!" />} />
          <Route exact path="/productos" element={<ItemList />} />
          <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<h1>Categoría por ID</h1>} />
          <Route path="*" element={<h1>Producto no encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

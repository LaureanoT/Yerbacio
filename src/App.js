import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Home from './components/home/home';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailConteiner from './components/itemDetailConteiner/itemDetailConteiner';
import CartProvider from './components/Context/CartProvider';

function App() {
  return (
    <CartProvider>
      <>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home greatings={"¡Bienvenidos!"} />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailConteiner />} />
          </Routes>
        </BrowserRouter>
      </>
    </CartProvider>
  );
}

export default App;


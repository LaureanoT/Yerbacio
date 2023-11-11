import "./App.css";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailConteiner from "./components/itemDetailConteiner/itemDetailConteiner";
import {useState} from "react"

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("CARRITO", cart);
  };

  return (
    <>
      <NavBar quantityItems={cart.length}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/category/:id" element={<ItemListContainer addToCart={addToCart}/> } />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

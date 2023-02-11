import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar';
import Home from "./components/home/home"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailConteiner from './components/itemDetailConteiner/itemDetailConteiner';
import Button from './components/cards/Cards';


function App() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home greatings={"¡Bienvenidos!"} />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar';
import Home from "./components/home/home"
/* route, routes */
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

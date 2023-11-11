import React, { useContext } from "react";
import "./home.css";
import ItemListContainer from "../itemListContainer/itemListContainer";
import CartContext from "../Context/CartContext";

export default function Home() {
    const { addToCart } = useContext(CartContext);

  return (
    <>
      <section className="bienvenidos">
        <h1>Welcome to Yerbacio asd</h1>
      </section>
      <ItemListContainer addToCart={addToCart}></ItemListContainer>
    </>
  );
}
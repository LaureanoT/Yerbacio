import React, { useState } from "react";
import "./home.css";
import ItemListContainer from "../itemListContainer/itemListContainer";

export default function Home({addToCart}) {
  

  return (
    <>
      <section className="bienvenidos">
        <h1>Welcome to Yerbacio asd</h1>
      </section>
      <ItemListContainer addToCart={addToCart}></ItemListContainer>
    </>
  );
}
import React, { useState } from "react";
import Cards from "../cards/Cards";
import { AuxiliarProductosOrganico } from "../../utils/data";

export default function ItemListContainer() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="listenContainer">
      {AuxiliarProductosOrganico.map((prod) => (
        <div key={prod.id}>
          <Cards
            id={prod.id}
            nombre={prod.nombre}
            imagen={prod.imagen}
            info={prod.info}
            addToCart={() => addToCart(prod)} // Envía el producto completo para ser agregado al carrito
          />
        </div>
      ))}
    </div>
  );
}
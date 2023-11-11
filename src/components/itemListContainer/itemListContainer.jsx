import React from "react";
import Cards from "../cards/Cards";
import { AuxiliarProductosOrganico } from "../../utils/data";

export default function ItemListContainer({ addToCart }) {
  const handleAddToCart = (prod) => {
    addToCart(prod);
  };

  return (
    <div className="listenContainer">
      {AuxiliarProductosOrganico.map((prod) => (
        <div key={prod.id}>
          <Cards product={prod} addToCart={handleAddToCart} />
        </div>
      ))}
    </div>
  );
}
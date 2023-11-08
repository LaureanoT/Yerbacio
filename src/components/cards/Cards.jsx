import React from "react";
import "./Cards.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Cards({ id, nombre, imagen, info, addToCart }) {
  const handleAddToCart = () => {
    addToCart(id, nombre, imagen, info);
  };

  return (
    <Card><div className="card">
    <img src={imagen} alt={nombre} />
    <h2>{nombre}</h2>
    <p>{info}</p>
    <Button onClick={handleAddToCart}>Agregar al carrito</Button>
  </div>
  </Card>
  );
}

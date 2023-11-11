// Cards.js
import React from "react";
import "./Cards.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cards({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card>
      <div className="card">
        <Card.Img variant="top" src={product.imagen} alt={product.nombre} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>{product.info}</Card.Text>
          <Button variant="primary" onClick={handleAddToCart}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
}

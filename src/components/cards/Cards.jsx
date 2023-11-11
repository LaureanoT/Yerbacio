import React, {useContext} from "react";
import "./Cards.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from "../Context/CartContext";

export default function Cards({ product}) {
  const { addToCart } = useContext(CartContext);

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

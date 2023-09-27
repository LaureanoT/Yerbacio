import React from "react";
import "./Cards.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards({ id, imagen, nombre, info, buttons, category }) {
  return (
    <>
      <div className="cardProductos">
        <img src={imagen} alt="" />
        <h1>{nombre}</h1>
        <p>{info}</p>
        {buttons === true ? <a href={`/category/${category}`}>¡Ingresa a la categoría!</a> : 
        <a href={`/item/${id}`}>Mas info aca</a>}
        <Button>Añadir al carrito</Button>

      </div>

    </>
  )
}

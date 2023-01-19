import React from "react";
import "./itemListContainer.css"
import Cards from "../cards/Cards";
import {AuxiliarProductos} from "../../utils/data"
export default function ItemListContainer({ greatings }) {
console.log(AuxiliarProductos)
    return (
        <div className="listenContainer">
            <h1>{greatings}</h1>
            {AuxiliarProductos.map((prod) => 
            <Cards id={prod.id} nombre={prod.nombre} imagen={prod.imagen} info={prod.info}/>
            )}
        </div>
    )
}
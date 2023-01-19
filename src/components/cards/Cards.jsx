import React from "react";
import "./Cards.css";

export default function Cards({id, imagen, nombre, info}){
    return(
        <>
        <div>
            <img src={imagen} alt="" />
            <h1>{nombre}</h1>
            <p>{info}</p>
            <a href={`/item/${id}`}>Mas info aca</a>
        </div>
        
        </>
    )
}
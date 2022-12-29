import React from "react";
import "./Cards.css";

export default function Cards({imagen, titulo, precio}){
    return(
        <>
        <div>
            <img src={imagen} alt="" />
            <h1>{titulo}</h1>
            <p>{precio}</p>
        </div>
        </>
    )
}
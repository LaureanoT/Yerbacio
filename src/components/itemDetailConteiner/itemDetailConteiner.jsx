import React from "react";
import yerba1 from "../../images/descarga.jpg"
import {AuxiliarProductos} from "../../utils/data"
import { useLocation } from "react-router-dom";
export default function ItemDetailConteiner(){
    const location = useLocation().pathname;
    console.log(location.slice(-1))
    
    return(
        <div>
          {AuxiliarProductos.map((prod) => {
                if (prod.id === location.slice(-1)) {
                    return(

                    <div>
                        <h3>{prod.nombre}</h3>
                        <img src={prod.imagen}/>
                        <p>{prod.info}</p>
            
                    </div>
                    )
                }
            })}
        </div>
    
)}

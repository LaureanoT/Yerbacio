import React from "react";
import yerba1 from "../../images/descarga.jpg"
import {AuxiliarProductosOrganico} from "../../utils/data"
import { useLocation } from "react-router-dom";
export default function ItemDetailConteiner(){
    const location = useLocation().pathname;
    const comprobacion = Number(location.slice(-1))
    return(
        <div>
          {AuxiliarProductosOrganico.map((prod) => {
                if (prod.id === comprobacion) {
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

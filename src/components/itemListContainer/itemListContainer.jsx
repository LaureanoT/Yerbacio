import React, {useEffect, useState} from "react";
import "./itemListContainer.css"
import Cards from "../cards/Cards";
import { AuxiliarProductosOrganico } from "../../utils/data"
import { useLocation } from "react-router-dom";
export default function ItemListContainer() {
    const location = useLocation()
    const locationAux = location.pathname.split('/')[2]
    const [buttons, setButtons] = useState(true)
    console.log(locationAux)
    useEffect(() => {
        console.log(location.pathname.split('/'))
        if(location.pathname.split('/').length === 2){
            setButtons(true)
        }else{
            setButtons(false)
        }
    },[location])

    return (
        <div className="listenContainer">
            {AuxiliarProductosOrganico.map((prod) => {
                if (prod.category === locationAux) {
                    return (
                        <Cards id={prod.id} nombre={prod.nombre} imagen={prod.imagen} info={prod.info} />
                    )
                } else if (!locationAux && prod.id === 1 || !locationAux && prod.id === 2 || !locationAux && prod.id === 3 ) {
                    return (
                        <Cards buttons={buttons} id={prod.id} nombre={prod.nombre} imagen={prod.imagen} info={prod.info} category={prod.category} />
                    )
                }
            },

            )}
        </div>
    )
}
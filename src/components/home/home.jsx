import React from "react";
import "./home.css"
import ItemListContainer from "../itemListContainer/itemListContainer"
export default function Home() {
    
    return (
        <>
            <section className="bienvenidos">
                <ItemListContainer greatings={"¡Bienvenidos!"}/>
            </section>
        </>
    )
}
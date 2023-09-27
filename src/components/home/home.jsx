import React from "react";
import "./home.css"
import ItemListContainer from "../itemListContainer/itemListContainer"
import Cards from "../cards/Cards"
export default function Home() {
    
    return (
        <>
            <section className="bienvenidos">
                <h1>Welcome to Yerbacio</h1>
            </section>
            <ItemListContainer></ItemListContainer>
        </>
    )
}
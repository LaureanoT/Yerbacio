import React, { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi"
import "./CartWidget.css"
import CartContext from "../Context/CartContext";



export const CartWidget = () => {
    
    const cart = useContext(CartContext)

    return (
        <>
            <div>
                <HiShoppingCart />
                <span>{cart.length}</span>
            </div>
        </>
    );
}

export default CartWidget;
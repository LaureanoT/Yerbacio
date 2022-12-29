import React from "react";
import { HiShoppingCart } from "react-icons/hi"
import "./CartWidget.css"

export const CartWidget = () => {
    return (
        <>
            <div>
                <HiShoppingCart />
                <span>5</span>
            </div>
        </>
    );
}

export default CartWidget;
import React from "react";
import { HiShoppingCart } from "react-icons/hi"
import "./CartWidget.css"



export const CartWidget = ({quantityItems}) => {
    return (
        <>
            <div>
                <HiShoppingCart />
                <span>{quantityItems}</span>
            </div>
        </>
    );
}

export default CartWidget;
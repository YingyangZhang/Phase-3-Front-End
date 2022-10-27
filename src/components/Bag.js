import React, { useEffect, useState } from "react";
import loopTable from "../images/loopTable.jpeg";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Bag({totalPrice, isBag, setIsBag, setInCartProducts, inCartProducts, deleteFromCart, updateCart, total}) {
    function handleHide() {
        setIsBag(false)
    }

    function updateQuantity(click, product){
        if(product.quantity != 0 ){
            axios.patch(`http://localhost:9292/cart/${product.furniture.id}`, {
                quantity: click === "minus" ? product.quantity - 1 : product.quantity + 1
            })
            .then(r => updateCart(r.data))    
        }
        else if (product.quantity === 1){
            // console.log(product.quantity)
            handleDelete(product)   
        }
    }  


    const handleDelete = (product) => {
            axios.delete(`http://localhost:9292/cart/${product.id}`)
            deleteFromCart(product.id)
    }



    return (
        <div className={isBag ? "bag" : "bag bag-hide"}>
            <div className={isBag ? "bag-container" : "bag-container bag-container-hide"}>
                <div className="top">
                    <div className="bag-title">BAG</div>
                    <div className="bag-exit" onClick={handleHide}><i class='bx bx-x'></i></div>
                </div>
     
                <div className="cart-card">
                    {inCartProducts.map(product => {
                        return(
                            <div className="items-container" key={product.id}>
                                <div className="items-info-container" key={product.id}>
                                <div className="item-img-container">
                                <img src={product.furniture.image.thumbnail} alt="image"></img>
                            </div>
                        <div className="items-info">
                            <div className="item-title">{product.name}</div>
                            <div>
                                <p style={{marginBottom: "5px"}}>Price: &nbsp; ${product.furniture.price}</p>
                                <p>Quantity: &nbsp; <span className="minus" onClick={(e) => {updateQuantity(e.target.className, product)}}>- &nbsp; </span> {product.quantity}<span className="plus" onClick={(e) => {updateQuantity(e.target.className, product)}}> &nbsp; +</span></p>
                            </div>
                        </div>
                    </div>
                     <i class='bx bx-x' onClick={() => {handleDelete(product)}}></i> 
                     </div>
                        )
                    })}
                </div>
                  
                <div className="summary">
                    <div className="summary-title">
                        Order Summary
                    </div>
                    <hr></hr>
                    <div className="items-count">
                        <p>Number of Items</p>
                        <p>{inCartProducts.length}</p>
                        </div>
                    <div className="subtotal">
                        <p>Order Subtotal</p>
                        <p>${totalPrice}</p>
                    </div>
                    <NavLink to="/checkout" className="checkout-btn" onClick={handleHide}>
                        <button>CHECKOUT</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Bag;
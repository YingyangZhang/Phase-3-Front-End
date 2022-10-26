import React, { useEffect, useState } from "react";
import loopTable from "../images/loopTable.jpeg";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Bag({isBag, setIsBag, setInCartProducts, inCartProducts}) {
    const [test, setTest] = useState([])
    function handleHide() {
        setIsBag(false)
    }

    useEffect(()=>{
        axios.get("http://localhost:9292/cart/info")
        .then(r => {
            setInCartProducts(r.data)
        })

    },[])

    function deleteFromCart(id){
        axios.delete(`http://localhost:9292/cart/${id}`)
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
                            <div className="items-container">
                                <div className="items-info-container" key={product.id}>
                                <div className="item-img-container">
                                <img src={product.image.angle1} alt="image"></img>
                            </div>
                        <div className="items-info">
                            <div className="item-title">{product.name}</div>
                            <div>
                                <p style={{marginBottom: "5px"}}>Price: &nbsp; ${product.price}</p>
                                <p>Quantity: &nbsp; <span className="minus">- &nbsp; </span> {product.quantity}<span className="plus"> &nbsp; +</span></p>
                            </div>
                        </div>
                    </div>
                     <i class='bx bx-x' onClick={deleteFromCart(product.id)}></i> 
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
                        <p>1</p>
                        </div>
                    <div className="subtotal">
                        <p>Order Subtotal</p>
                        <p>$1,000</p>
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
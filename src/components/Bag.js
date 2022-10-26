import React from "react";
import loopTable from "../images/loopTable.jpeg";
import { NavLink } from "react-router-dom";

function Bag({isBag, setIsBag}) {
    function handleHide() {
        setIsBag(false)
    }

    return (
        <div className={isBag ? "bag" : "bag bag-hide"}>
            <div className={isBag ? "bag-container" : "bag-container bag-container-hide"}>
                <div className="top">
                    <div className="bag-title">BAG</div>
                    <div className="bag-exit" onClick={handleHide}><i class='bx bx-x'></i></div>
                </div>

                <div className="items-container">
                    <div className="items-info-container">
                        <div className="item-img-container">
                            <img src={loopTable} alt="image"></img>
                        </div>
                        <div className="items-info">
                            <div className="item-title">Loop Table</div>
                            <div>
                                <p style={{marginBottom: "5px"}}>Price: &nbsp; $1,000</p>
                                <p>Quantity: &nbsp; <span className="minus">- &nbsp; </span> 1 <span className="plus"> &nbsp; +</span></p>
                            </div>
                        </div>
                    </div>
                    <i class='bx bx-x'></i>
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
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

function SingleProduct({inCartProducts}) {
    const [isInBag, setIsInBag] = useState(false)
    const {id} = useParams()
    const location = useLocation()
    const state = location.state

    function sendToCart() {
        if(inCartProducts.some(obj => obj.furniture_id === state.furniture.id)){
            axios.patch(`http://localhost:9292/cart/${state.furniture.id}`,{
                quantity: 3
            })
        } else {
            axios.post("http://localhost:9292/cart",{
                name: state.furniture.name,
                furniture_id: state.furniture.id,
                quantity: 1
            })
            .then(r => console.log(r))
        }
        setIsInBag(true)
    }

    return (
        <div className="single-product">
            <NavLink to="/products" exact><div className="go-back"><i class='bx bx-left-arrow-alt'></i></div></NavLink>
            <div className="product-imgs-container">
                <motion.img 
                className="copies-title" initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.1} }}
                src={state.furniture.image.angle1} alt="image" />
                <motion.img 
                className="copies-title" initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.1} }} 
                src={state.furniture.image.angle2} alt="image" />
                <motion.img 
                className="copies-title" initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.1} }} 
                src={state.furniture.image.angle3} alt="image" />
            </div>

            <div className="warpper">
                <div className="sing-product-info">
                    <div className="sing-product-designer">
                            {state.furniture.designer}
                    </div>
                    
                    <div className="name-and-price">
                        <div className="single-product-name">
                            {state.furniture.name}
                        </div>
                        <div className="single-product-price">
                            ${state.furniture.price}
                        </div>
                    </div>

                    <p className="description">
                        Clerici, designed by Konstantin Grcic, radiates devout serenity. The main concept and the 
                        fascination of Clerici lie in the grand simplicity of the design. Mattiazzi's expert 
                        craftsmanship and experience make complex forms and experimental approaches possible. 
                        Grcic uses this capability to perfect a traditional form implemented in ultra high quality, 
                        emphasizing its unpretentious aesthetics. The Clerici collection is a manifestation of 
                        Grcic's intention to create new typologies. 
                    </p>

                    <hr></hr>
                    
                    <div className="details-container">
                        <p>Material</p>
                        <p>{state.furniture.material}</p>
                    </div>

                    <hr></hr>

                    <div className="details-container">
                        <p>Dimensions</p>
                        <p>{state.furniture.dimensions}</p>
                    </div>

                    <hr></hr>

                    <div className="details-container">
                        <p>Origin</p>
                        <p>{state.furniture.origin}</p>
                    </div>

                    <hr></hr>

                    {isInBag ? <button className="added-to-cart-btn" >ADDED TO BAG</button> :
                    <button className="add-to-cart-btn" onClick={sendToCart}>ADD TO BAG</button> 
                    }

                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function SingleProduct() {
    return (
        <div className="single-product">
            <NavLink to="/products" exact><div className="go-back"><i class='bx bx-left-arrow-alt'></i></div></NavLink>
            <div className="product-imgs-container">
                <motion.img 
                className="copies-title" initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.1} }}
                src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_sq.jpg" alt="image" />
                <motion.img 
                className="copies-title" initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.1} }} src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="image" />
                <motion.img 
                className="copies-title" initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.1} }} src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00004.jpg" alt="image" />
            </div>

            <div className="warpper">
                <div className="sing-product-info">
                    <div className="sing-product-designer">
                            Lucas Faber
                    </div>
                    
                    <div className="name-and-price">
                        <div className="single-product-name">
                            ODD TABLE
                        </div>
                        <div className="single-product-price">
                            $800
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
                        <p>Solid Ash</p>
                    </div>

                    <hr></hr>

                    <div className="details-container">
                        <p>Dimensions</p>
                        <p>31.5"W X 31.5"D X 13.8"H</p>
                    </div>

                    <hr></hr>

                    <div className="details-container">
                        <p>Origin</p>
                        <p>Berlin</p>
                    </div>

                    <hr></hr>

                    <button className="add-to-cart-btn">ADD TO CART</button>

                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function AllProducts({furnitures, selectedCat, setSelectedCat, }) {

    function handleChange(e) {
        setSelectedCat(e.target.value)
    }
    
    const filteredFurnitures = furnitures.filter(furniture => {
        return (selectedCat === "All" ? furniture : furniture.category.category_name === selectedCat)
    })

    const navigate = useNavigate();

    console.log(selectedCat)
    return (
        <main className="products">
        <div className="products-filter">
            <div className="products-nav">
                <div>
                    <label className="selection" for="categories">CATEGORY: &nbsp; </label>
                    <select name="categories" className="options" onChange={handleChange} value={selectedCat}>
                        <option value="All">All</option>
                        <option value="Chair">Chair</option>
                        <option value="Table">Table</option>
                        <option value="Sofa">Sofa</option>
                    </select>
                </div>
                <div className="selection-title">{selectedCat.toUpperCase()}</div>
            </div>
        </div>

        
            <div className="products-container">

            {filteredFurnitures.map(furniture => {
                return (
                    <motion.div key={furniture.id} 
                    onClick={() => {navigate(`/products/${furniture.id}`, {state: {furniture}})}} 
                    className="product" 
                    initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} 
                    }}>
                <div className="product-img-container">
                    <img src={furniture.image.angle1} alt="iamge" />
                </div>

                <div className="designer">
                    {furniture.designer}
                </div>

                <div className="name-price">
                    <span className="product-name">
                        {furniture.name}
                    </span>
                    <span className="product-price">
                        ${furniture.price}
                    </span>
                </div>
            </motion.div>
                )
            })}
            

            </div>
            
        

        <footer className="footer">
                <p>Ⓒ 2022 HAUS LLC. ALL RIGHTS RESERVED</p>
        </footer>
    </main>
)
}

export default AllProducts;
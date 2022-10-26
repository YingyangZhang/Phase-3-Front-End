import React, { useState } from "react";
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";

function Products({furnitures, selectedCat, setSelectedCat}) {
    const [isProduct, setIsProduct] = useState(false);

    return (
        <>
            <AllProducts furnitures={furnitures} selectedCat={selectedCat} setSelectedCat={setSelectedCat}/>
        </>
    )
}

export default Products;
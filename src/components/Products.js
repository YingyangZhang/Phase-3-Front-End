import React, { useState } from "react";
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";

function Products() {
    const [isProduct, setIsProduct] = useState(false);

    return (
        <>
            {isProduct ? <SingleProduct /> : <AllProducts setIsProduct={setIsProduct}/>}
        </>
    )
}

export default Products;
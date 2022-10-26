import React from "react";
import { motion } from "framer-motion";

function AllProducts({setIsProduct}) {
    function handleClick() {
        setIsProduct(true);
    }

    return (
        <main className="products">
        <div className="products-filter">
            <div className="products-nav">
                <div>
                    <label className="selection" for="categories">CATEGORY: &nbsp; </label>
                    <select name="categories" className="options">
                        <option value="all">All</option>
                        <option value="chair">Chair</option>
                        <option value="table">Table</option>
                        <option value="Sofa">Sofa</option>
                    </select>
                </div>
                <div className="selection-title">ALL</div>
            </div>
        </div>

        <div className="products-container">
            <motion.div onClick={handleClick} className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

            <motion.div className="product" initial={{ y: 5, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }}>
                <div className="product-img-container">
                    <img src="https://leibal.wpenginepowered.com/wp-content/uploads/2020/12/leibal_odd-table_lucas-faber_00005.jpg" alt="iamge" />
                </div>

                <div className="designer">
                    Lucas Faber
                </div>

                <div className="name-price">
                    <span className="product-name">
                        ODD TABLE
                    </span>
                    <span className="product-price">
                        $800
                    </span>
                </div>
            </motion.div>

        </div>
        <footer className="footer">
                <p>Ⓒ 2022 HAUS LLC. ALL RIGHTS RESERVED</p>
        </footer>
    </main>
)
}

export default AllProducts;
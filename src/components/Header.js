import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import search from "../images/search-icon.png";

function Header({setIsBag, setIsSearch}) {
    function handleBag() {
        setIsBag(true)
    }

    function handleSearch() {
        setIsSearch(true)
    }

    return (
        <header className="header">
            <nav className="header-nav">
                <motion.a href="#" className="nav-logo" initial={{ y: 10, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.1} }}>
                    HAUS
                </motion.a>               
                <ul>
                    <li><NavLink to="/" exact style={{color: "#000"}}>HOME</NavLink></li>
                    <li><NavLink to="/products" exact style={{color: "#000"}}>PRODUCTS</NavLink></li>
                    <li onClick={handleBag}>BAG (0)</li>
                    <li>USER</li>
                </ul>                 
                <img src={search} alt='search-icon' className="search-icon" onClick={handleSearch}/>         
                <p className="main-year">2022</p>        
            </nav>
        </header>
    )
}

export default Header;
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import search from "../images/search-icon.png";
import { useNavigate } from "react-router-dom";

function Header({setIsBag, setIsSearch, setFurnitures, isCancel, setIsCancel, bagCount}) {

    const navigate = useNavigate()

    function handleBag() {
        setIsBag(true)
    }

    function handleSearch() {
        setIsSearch(true);
    }

    function handleHome() {
        navigate(`/`)
    }

    return (
        <header className="header">
            <nav className="header-nav">
                <motion.a href="#" className="nav-logo" onClick={handleHome} initial={{ y: 10, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.1} }}>
                    HAUS
                </motion.a>               
                <ul>
                    <li><NavLink to="/" exact style={{color: "#000"}}>HOME</NavLink></li>
                    <li><NavLink to="/products" exact style={{color: "#000"}}>PRODUCTS</NavLink></li>
                    <li onClick={handleBag}>BAG ({bagCount.length})</li>
                </ul>                 
                <img src={search} alt='search-icon' className="search-icon" onClick={handleSearch}/>         
                <p className="main-year">2022</p> 
            </nav>
        </header>
    )
}

export default Header;
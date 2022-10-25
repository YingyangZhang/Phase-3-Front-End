import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {
    const navStyle = {color: "black"}
    return (
        <header className="header">
            <nav className="header-nav">
                <a href="/" className="nav-logo">HAUS</a>               
                <ul>
                    <li><NavLink style={navStyle} to='/'>HOME</NavLink></li>
                    <li><NavLink style={navStyle} to='/products'>PRODUCTS</NavLink></li>
                    <li><NavLink style={navStyle} to='/cart'>BAG (0)</NavLink></li>
                    <li>USER</li>
                </ul>               
            </nav>
        </header>
    )
}

export default Header;
import React from "react";

function Header() {
    return (
        <header className="header">
            <nav className="header-nav">
                <a href="#" className="nav-logo">HAUS</a>               
                <ul>
                    <li>HOME</li>
                    <li>PRODUCTS</li>
                    <li>BAG (0)</li>
                    <li>USER</li>
                </ul>               
            </nav>
        </header>
    )
}

export default Header;
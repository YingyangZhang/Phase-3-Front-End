import React, { useState } from "react";
import './App.css';

import Header from "./Header";
import Home from "./Home";
import Search from "./Search";

function App() {
    const [isSearch, setIsSearch] = useState(false);

        fetch('http://localhost:9292/furnitures')
        .then(r => r.json())
        .then(data => console.log(data))

    return(
        <>
            {isSearch ? <Search setIsSearch={setIsSearch}/> : ""}
            <Header />
            <Home setIsSearch={setIsSearch}/>
        </>
    )
}

export default App;
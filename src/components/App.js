import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Furnitures from './Furnitures'

import './App.css';

import Header from "./Header";
import Home from "./Home";
import Search from "./Search";

function App() {
    const [isSearch, setIsSearch] = useState(false);



    return(
        <>
            <Header />
            {isSearch ? <Search setIsSearch={setIsSearch}/> : ""}
            <Routes>
                <Route exact path="/" element={<Home setIsSearch={setIsSearch}/>}>
                </Route>
                <Route exact path="/furnitures/:id" element={<Furnitures/>}>
                </Route>
            </Routes>
        </>
    )
}

export default App;
import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Search from "./Search";
import Bag from "./Bag";
import Products from "./Products";
import Checkout from "./Checkout";
import ScrollRestoration from "./ScrollRestoration";
import axios from "axios";
import SingleProduct from "./SingleProduct";

function App() {
    const [furnitures, setFurnitures] = useState([])
    const [isSearch, setIsSearch] = useState(false);
    const [isBag, setIsBag] = useState(false);
    const [selectedCat, setSelectedCat] = useState("All")
    const [inCartProducts, setInCartProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9292/furnitures')
        .then(r => {
            console.log(r.data)
            setFurnitures(r.data)
        })
    },[])

    return(
        <>
            <ScrollRestoration />
            <Search isSearch={isSearch} setIsSearch={setIsSearch}/>
            <Bag isBag={isBag} setIsSearch={setIsSearch} setIsBag={setIsBag} setInCartProducts={setInCartProducts} inCartProducts={inCartProducts}/>
            <Header setIsSearch={setIsSearch} setIsBag={setIsBag}/>
            <Routes>
                <Route exact path="/" element={<Home furnitures={furnitures} setSelectedCat={setSelectedCat} selectedCat={selectedCat}/>} />
                
                <Route exact path="/products" element={<Products furnitures={furnitures} selectedCat={selectedCat} setSelectedCat={setSelectedCat}/>} />

                <Route exact path="/products/:id" element={<SingleProduct inCartProducts={inCartProducts}/>} />
                
                <Route exact path="/checkout" element={<Checkout/>} />
            </Routes>
        </>
    )
}

export default App;
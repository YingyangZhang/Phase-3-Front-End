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
    const [isCancel, setIsCancel] = useState(false)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        axios.get('http://localhost:9292/furnitures')
        .then(r => {
            console.log(r.data);
            const strAscending = [...r.data].sort((a, b) => a.name > b.name ? -1 : 1);
            setFurnitures(strAscending)
        })

        axios.get("http://localhost:9292/cart")
        .then(r => {
            setInCartProducts(r.data)
        })

    },[])

    const addToCart = (newProduct) => {
        console.log(newProduct)
        const updatedCart = [...inCartProducts, newProduct]
        setInCartProducts(updatedCart)
    }

    const deleteFromCart = (deleteItem) => {
        const updatedCart = inCartProducts.filter(product => {
            return product.id !== deleteItem
        })
        setInCartProducts(updatedCart)
    }

    const updateCart = (item) => {
        const updatedCart = inCartProducts.map(product => {
            return product.id === item.id ? item : product
        })
        setInCartProducts(updatedCart)
    }

    const priceList = inCartProducts.map(product => {
        return product.furniture.price * product.quantity
    })

    const totalPrice = priceList.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);


    return(
        <>
            <ScrollRestoration />
            <Search isSearch={isSearch} setIsSearch={setIsSearch} furnitures={furnitures} setFurnitures={setFurnitures} setIsCancel={setIsCancel}/>
            <Bag totalPrice={totalPrice} isBag={isBag} setIsSearch={setIsSearch} setIsBag={setIsBag} setInCartProducts={setInCartProducts} inCartProducts={inCartProducts} deleteFromCart={deleteFromCart} updateCart={updateCart} total={total}/>
            <Header setIsSearch={setIsSearch} setIsBag={setIsBag} setFurnitures={setFurnitures} isCancel={isCancel} setIsCancel={setIsCancel} bagCount={inCartProducts}/>
            <Routes>
                <Route exact path="/" element={<Home furnitures={furnitures} setSelectedCat={setSelectedCat} selectedCat={selectedCat}/>} />
                
                <Route exact path="/products" element={<Products furnitures={furnitures} selectedCat={selectedCat} setSelectedCat={setSelectedCat} setFurnitures={setFurnitures} isCancel={isCancel} setIsCancel={setIsCancel}/>} />

                <Route exact path="/products/:id" element={<SingleProduct inCartProducts={inCartProducts} updateCart={updateCart} addToCart={addToCart} setIsBag={setIsBag}/>} />
                
                <Route exact path="/checkout" element={<Checkout totalPrice={totalPrice} inCartProducts={inCartProducts}/>} />
            </Routes>
        </>
    )
}

export default App;
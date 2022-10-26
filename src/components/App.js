import React, {useEffect, useState} from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Header from "./Header";
import Home from "./Home";
import Search from "./Search";
import Furnitures from './Furnitures'
import Cart from './Cart'

function App() {
    const [isSearch, setIsSearch] = useState(false);
    const [cartItem, setCartItem] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:9292/cart`)
        .then(data => {
            console.log(data.data)
            setCartItem(data.data)
        })

        // update the quantity of our cart
        axios.get(`http://localhost:9292/cart/quantity`)
        .then(data => {
            console.log(data.data)
            setCartQuantity(data.data)
        })
    },[setCartItem, setCartQuantity])

    const addCartItem = (itemToAdd) => {
        setCartItem([...cartItem, itemToAdd])
        console.log(cartItem)
    }

    const updateCartItem = (itemToUpdate) => {
        const updatedCartItem = cartItem.map(item => {
            return item.id === itemToUpdate.id ? itemToUpdate : item
        })
        setCartItem(updatedCartItem)
        console.log(updatedCartItem)
    }

    const handleDeleteItem = (itemToDelete) => {
        const newCart = cartItem.filter(item => {
            return item.id !== itemToDelete.id
        })
        setCartItem(newCart)
        console.log(cartItem)
    }


    return(
        <>
            <Header cart={cartQuantity}/>
            {isSearch ? <Search setIsSearch={setIsSearch}/> : ""}
            <Routes>
                <Route exact path="/" element={<Home setIsSearch={setIsSearch}/>}>
                </Route>
                <Route exact path="/furnitures/:id" element={<Furnitures cartItem={cartItem} setCartItem={setCartItem} test={addCartItem}/>}>
                </Route>
                <Route exact path="/cart" element={<Cart onDeleteItem={handleDeleteItem} cartItem={cartItem}/>}>
                </Route>
            </Routes>
        </>
    )
}

export default App;
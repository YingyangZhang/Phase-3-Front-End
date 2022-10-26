import React, { useState } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Search from "./Search";
import Bag from "./Bag";
import Products from "./Products";
import Checkout from "./Checkout";
import ScrollRestoration from "./ScrollRestoration";

function App() {
    const [isSearch, setIsSearch] = useState(false);
    const [isBag, setIsBag] = useState(false);

    return(
        <>
            <ScrollRestoration />
            <Search isSearch={isSearch} setIsSearch={setIsSearch}/>
            <Bag isBag={isBag} setIsSearch={setIsSearch} setIsBag={setIsBag}/>
            <Header setIsSearch={setIsSearch} setIsBag={setIsBag}/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route exact path="/checkout">
                    <Checkout />
                </Route>
            </Switch>
        </>
    )
}

export default App;
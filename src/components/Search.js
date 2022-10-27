import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({isSearch, setIsSearch, setFurnitures, furnitures, setIsCancel}) {
    const [userInput, setUserInput] = useState("")
    const navigate = useNavigate()

    function handleClick() {
        setIsSearch(false)
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/products`)
        setIsSearch(false)
        const newArr = furnitures.filter(furniture => {
            if (userInput !== "") {
                return furniture.name.toLowerCase().replace(/\s/g, '').includes(userInput.toLowerCase().replace(/\s/g, ''))
            } else{
                return true
            }
        })
        setFurnitures(newArr)
        setIsCancel(true)
        setUserInput("")
    }

    function handleChange(e) {
        setUserInput(e.target.value)
    }

    console.log(userInput)

    return (
        <div className={isSearch ? "search" : "search search-exit"}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="TYPE HERE" autocomplete="off" autoFocus onChange={handleChange} value={userInput} id="txt"/>
                <div className="search-x" onClick={handleClick}><i class='bx bx-x'></i></div>
            </form>
        </div>
    )
}

export default Search;
import React from "react";

function Search({setIsSearch}) {
    function handleClick() {
        setIsSearch(false)
    }

    return (
        <div className="search">
            <input type="text" placeholder="TYPE HERE"/>
            <div className="search-x" onClick={handleClick}><i className='bx bx-x'></i></div>
        </div>
    )
}

export default Search;
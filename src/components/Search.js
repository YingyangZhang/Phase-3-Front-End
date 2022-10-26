import React from "react";

function Search({isSearch, setIsSearch}) {
    function handleClick() {
        setIsSearch(false)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Submitted.")
    }

    return (
        <div className={isSearch ? "search" : "search search-exit"}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="TYPE HERE"/>
                <div className="search-x" onClick={handleClick}><i class='bx bx-x'></i></div>
            </form>
        </div>
    )
}

export default Search;
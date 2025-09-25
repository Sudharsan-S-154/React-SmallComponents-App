import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {

    const [isSearch, setIsSearch] = useState(true);
    const handleClick = (e) => {
        if (e.target.className !== "searchInput") {
            setIsSearch(!isSearch)
        }
    }

    return (
        <div className={` ${!isSearch ? "hiddenSearchBarDark" : "hiddenSearchBar"}`}
            onClick={(e) => { handleClick(e) }}>
            {
                isSearch ?
                    <FaSearch className={`searchBar ${!isSearch && ""}`} onClick={() => { setIsSearch(!isSearch) }} /> :
                    < input className="searchInput" placeholder='Search here..' />
            }
        </div >
    )
}

export default HiddenSearchBar
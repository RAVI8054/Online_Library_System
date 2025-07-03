// Search component that takes user input and sends it to parent for filtering
import React, { useState } from 'react'

function Search({ onSearch }) {

    // local state to track the input value
    let [searchInput, setSearchInput] = useState("");

    // handle input change and send the value to parent
    function handleInput(e) {
        const value = e.target.value;
        setSearchInput(value);
        onSearch(value); // Send to parent component
    }

    return (
        <>
            <input
                type="text"
                placeholder='Search by title or author'
                value={searchInput}
                onChange={handleInput}
            />
        </>
    )
}

export default Search;

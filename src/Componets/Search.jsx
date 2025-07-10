// Search component that takes user input and sends it to parent for filtering
import React, { useState } from 'react'

function Search({ handleSearch }) {

    // local state to track the input value
    let [searchInput, setSearchInput] = useState("");

    // handle input change and send the value to parent
    function handleInput(e) {
        const value = e.target.value;
        setSearchInput(value);
        handleSearch(value); // Send to parent component
    }

    return (
        <>
            <div className="my-6 px-4 sm:px-6 lg:px-8 max-w-screen-md mx-auto">
             
                <input
                    type="text"
                    placeholder='Search book by title or author'
                    value={searchInput}
                    onChange={handleInput}
                    className="w-full border border-gray-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                />
            </div>
        </>
    )
}

export default Search;

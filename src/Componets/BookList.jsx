import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Book from "./Book";
import Search from "./Search";                                                                                        

import Books from "../utils/DummyData";
import FilterCategory from "./FilterCategory/FilterCategory";

export default function BookList() {
    const { category } = useParams(); // get category 
    const navigate = useNavigate();
    let [filteredBooks, setFilteredBooks] = useState([]);
    let [searchInput, setSearchInput] = useState("");

    // Filtering books based on search and category 
    useEffect(() => {
        let filtered = Books;
        if (category && category.toLowerCase() !== "all") {
            filtered = filtered.filter(
                book => book.category=== category
            );
        }
        if (searchInput.trim() !== "") {
            filtered = filtered.filter(
                book =>
                    book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchInput.toLowerCase())
            );
        }
        setFilteredBooks(filtered);
    }, [category, searchInput]);

    // Handler to update search input
    const handleSearch = (searchTerm) => {
        setSearchInput(searchTerm);
    };

    // Handler to update category and route on click
    const categoryHandle = (cat) => {
        const catLower = cat === "all" ? "" : cat;
        navigate(`/books/${catLower}`);
        setSearchInput(""); // reset search on category change
    };

    return (
        <>
            <FilterCategory categoryHandle={categoryHandle} />
            <div>
                {/* Search Input */}
                <Search handleSearch={handleSearch} />

                <div>
                    {(filteredBooks.length > 0 ? filteredBooks : Books).map((book) => (
                        <div key={`${book.id}-${book.title}`}>
                            <Book book={book} />
                            <Link to={`/book/${book.id}`} state={{ book }}>
                                <h3>View Details</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

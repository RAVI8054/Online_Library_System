import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // NEW import for Redux
import Book from "./Book";
import Search from "./Search";
import FilterCategory from "./FilterCategory/FilterCategory";

export default function BookList() {
    const { category } = useParams(); // get category 
    const navigate = useNavigate();

    const books = useSelector((state) => state.AddBook.items); // Get books from Redux store

    let [filteredBooks, setFilteredBooks] = useState([]);
    let [searchInput, setSearchInput] = useState("");

    // Filtering books based on search and category 
    useEffect(() => {
        let filtered = books;
        if (category && category.toLowerCase() !== "all") {
            filtered = filtered.filter(
                book => book.category === category
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
    }, [category, searchInput, books]); // ADD books to dependency array

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
            <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                {/* Search Input */}
                <Search handleSearch={handleSearch} />

                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {(filteredBooks.length > 0 ? filteredBooks : books).map((book) => (
                        <div key={`${book.id}-${book.title}`} className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition duration-300 flex flex-col justify-between">
                            <Book book={book} />
                            <Link
                                to={`/book/${book.id}`}
                                state={{ book }}
                                className="text-blue-600 hover:underline mt-4 text-center"
                            >
                                <h3 className="font-bold  hover:no-underline hover:text-indigo-600 transition duration-200">
                                    View Details
                                </h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

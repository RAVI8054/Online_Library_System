import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
// Importing the Search component
import Search from "./Search"; 

// Static category list
const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "History"];

export default function HomePage() {
    const [Books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [loading, setLoading] = useState(true); // loading state
    // Fetch books once on component mount
    useEffect(() => {
        fetchData();
    }, []);
    // Fetching all books from backend
    async function fetchData() {
        try {
            const response = await fetch("https://books-backend-0qxz.onrender.com/api/getAllBooks");
            const data = await response.json();
            console.log("result", data); // Original debug log
            setBooks(data.Books);
            setFilteredBooks(data.Books); // Initialize filtered list
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setLoading(false);
        }
    }
    // Filtering books based on title or author
    const handleSearch = (searchInput) =>
        setFilteredBooks(
            Books.filter(book =>
                book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                book.author.toLowerCase().includes(searchInput.toLowerCase())
            )
        );
    
    return (
        <>
            <div>
                {/* Search Input */}
                <Search onSearch={handleSearch} />

                {/* Categories */}
                <section className="flex">
                    <h2 className="font-bold ml-4">Categories:</h2>
                    <ul>
                        {categories.map((cat) => (
                            <li key={cat}>
                                <Link to={`/books/${cat.toLowerCase()}`}>{cat}</Link>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* padding around the whole list, gap between items */}
                {loading ? (
                    <p>Loading books...</p>
                ) : filteredBooks.length === 0 ? (
                    <p>No books found.</p>
                ) : (
                    <div className="flex flex-wrap w-full gap-6 p-4 m-4">
                        {filteredBooks.map((book) => (
                            <div
                                key={`${book.id}-${book.title}`}
                                className="w-auto sm:w-1/2 md:w-1/4 p-3 m-2 border rounded shadow"
                            >
                                <Link to={`/book/${book.id}`}>
                                    <Book book={book} />
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

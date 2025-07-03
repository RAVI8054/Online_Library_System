import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
//import Search from "./Search";


const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "History"];

export default function HomePage() {
    const [filteredBooks, setFilteredBooks] = useState([])

    // function filterSearchList() {
    //     setFilteredBooks(filterSearchBooks)
    // }

    useEffect(() => {
        fetchData()
    }, [])
    async function fetchData() {
        const response = await fetch("https://books-backend-0qxz.onrender.com/api/getAllBooks");
        const data = await response.json();
        console.log("result", data);
        setFilteredBooks(data.Books); 
        console.log(new Set(data.Books.map(b => b.id)).size === data.Books.length); // should be true
    }
    
    return (<>
        <div>
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
            <div className="flex flex-wrap w-full gap-6 p-4 m-4">  {/* padding around the whole list, gap between items */}
                {filteredBooks.map((book) => (
                    <div
                        key={`${book.id}-${book.title}`}
                        className=" w-auto sm:w-1/2 md:w-1/4 p-3 m-2 border rounded shadow"
                    >
                        <Link to={`/book/${book.id}`}>
                            <Book book={book} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
}

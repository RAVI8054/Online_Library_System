
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Header() {

    const AddBook = useSelector((store)=>store.AddBook.items);
    console.log(AddBook)

    return (

        <div className="max-w-5xl mx-auto px-1 py-2">
            {/* Nav */}
            <nav className="flex flex-wrap gap-4 justify-center text-blue-600 font-semibold text-lg mb-4">
                <Link to="/" ><li className="hover:underline">Home</li></Link>
                <Link to="/about" ><li className="hover:underline">About</li></Link>
                <Link to="/contact" ><li className="hover:underline"> contact</li></Link>
                <Link to="/add" ><li className="hover:underline">Add Book {AddBook.length}</li></Link>
            </nav>

            {/* Heading */}
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-800">📚 Welcome to the Online Library!</h1>

        </div>
    )
}

export default Header

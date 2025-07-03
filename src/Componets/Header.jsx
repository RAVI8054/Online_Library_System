
import { Link } from "react-router-dom"
function Header() {
    return (

        <div className="max-w-5xl mx-auto px-1 py-2">
            {/* Nav */}
            <nav className="flex flex-wrap gap-4 justify-center text-blue-600 font-semibold text-lg mb-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/contact" className="hover:underline"> contact</Link>
                <Link to="/add" className="hover:underline">Add Book</Link>
            </nav>

            {/* Heading */}
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-800">📚 Welcome to the Online Library!</h1>

        </div>
    )
}

export default Header

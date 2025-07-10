import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoLibrary } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { MdOutlineBookmarkAdd } from "react-icons/md";

function Header() {
    const newBooks = useSelector((store) => store.AddBook.newItems);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-indigo-700 text-white">
            {/* Nav */}
            <nav className="flex justify-between items-center p-4 text-white font-semibold text-lg">
                {/* Logo */}
                <Link to="/" className="text-3xl flex items-center gap-2 hover:text-red-400 hover:scale-105 transition-transform duration-200">
                    <IoLibrary />
                    <span>Library</span>
                </Link>

                {/* Hamburger Menu for Small Screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-3xl">
                        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>

                {/* Nav Links */}
                <ul
                    className={`flex flex-col text-2xl md:flex-row gap-4 text-center md:text-left md:items-center transition-all duration-300 ease-in-out ${isMenuOpen ? "flex" : "hidden md:flex"
                        }`}
                >
                    <Link to="/" className="hover:text-red-400  flex  items-center hover:no-underline transition-colors">
                     <IoIosHome />
                    <li >Home</li>
                    </Link>
                    <Link to="/about" className="hover:text-red-400  flex  items-center hover:no-underline transition-colors">
                        <FcAbout />
                        <li >About</li>
                    </Link>
                    <Link to="/contact" className="hover:text-red-400  flex  items-center hover:no-underline transition-colors">
                        <MdConnectWithoutContact />
                        <li > Contact</li>
                    </Link>
                    <Link to="/add" className="hover:text-red-400  flex  items-center hover:no-underline transition-colors">
                        <MdOutlineBookmarkAdd />
                        <li >
                         Add Book
                            {newBooks.length > 0 && (
                                <span className="text-xl font-bold text-white ml-2">
                                    ({newBooks.length})
                                </span>
                            )}
                        </li>
                    </Link>
                </ul>
            </nav>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl font-bold text-center pb-5 mb-3 text-gray-100">
                📚 Welcome to the Online Library!
            </h1>
        </div>
    );
}

export default Header;

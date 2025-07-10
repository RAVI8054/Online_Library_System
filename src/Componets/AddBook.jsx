// components/AddBook.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/addBookSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [newBook, setNewBook] = useState({
        id: '',
        title: '',
        author: '',
        years: '',
        pages: '',
        category: '',
        ratings: '',
        coverImage: '',
        description: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setNewBook((prevBook) => ({
            ...prevBook,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addItem(newBook));
        //  Navigate to home page
        navigate("/");
        // Reset form
        setNewBook({
            id: '',
            title: '',
            author: '',
            years: '',
            pages: '',
            category: '',
            ratings: '',
            coverImage: '',
            description: '',
        });
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
        >
            <h2 className="text-xl font-semibold text-center mb-4">Add a New Book</h2>

            <input
                name="id"
                placeholder="ID (optional/ if want custom id)"
                value={newBook.id}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
                name="title"
                placeholder="Title"
                value={newBook.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
                name="author"
                placeholder="Author"
                value={newBook.author}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
                name="years"
                placeholder="Published Date"
                value={newBook.years}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
                name="pages"
                placeholder="Pages"
                value={newBook.pages}
                onChange={handleChange}
                type="number"
                className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
                name="category"
                placeholder="Category"
                value={newBook.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
                name="ratings"
                placeholder="Ratings"
                value={newBook.ratings}
                onChange={handleChange}
                type="number"
                className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
                name="coverImage"
                placeholder="Cover Image URL"
                value={newBook.coverImage}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
            />
            <textarea
                name="description"
                placeholder="Description"
                value={newBook.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 h-28 resize-none"
            />
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
                Add Book
            </button>
        </form>
    );
}

export default AddBook;

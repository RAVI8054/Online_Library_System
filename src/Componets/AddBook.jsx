// components/AddBook.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

function AddBook() {
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
        <form onSubmit={handleSubmit}>
            <input name="id" placeholder="ID (optional)" value={newBook.id} onChange={handleChange} />
            <input name="title" placeholder="Title" value={newBook.title} onChange={handleChange} />
            <input name="author" placeholder="Author" value={newBook.author} onChange={handleChange} />
            <input name="years" placeholder="Published Date" value={newBook.years} onChange={handleChange} />
            <input name="pages" placeholder="Pages" value={newBook.pages} onChange={handleChange} type="number" />
            <input name="category" placeholder="Category" value={newBook.category} onChange={handleChange} />
            <input name="ratings" placeholder="Ratings" value={newBook.ratings} onChange={handleChange} type="number" />
            <input name="coverImage" placeholder="Cover Image URL" value={newBook.coverImage} onChange={handleChange} />
            <textarea name="description" placeholder="Description" value={newBook.description} onChange={handleChange} />
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBook;

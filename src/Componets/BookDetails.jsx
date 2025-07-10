import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function BookDetails() {
    const { id } = useParams();
    const location = useLocation();
    const book = location.state?.book;

    if (!book) return <p>No book data found. Try navigating from the homepage.
        <Link to="/">Back to books</Link></p>;

    return (
       <>
            <div>
                <img src={book.coverImage} alt={book.title} />
                <h2>{book.title}</h2>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Category:</strong> {book.category}</p>
                <p><strong>Description:</strong> {book.description}</p>
                <p><strong>Price:</strong> ${book.price}</p>

            </div>
            <Link to="/">Back to books</Link>
       </>
    );
}

export default BookDetails;

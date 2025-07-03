
import { Link } from 'react-router-dom';

function Book({ book }) {
    const { author, coverImage, category, title } = book;
    return (
        <div >
            <img src={coverImage} alt={title} width="200px" height="200px" />
            <div>
                <h2> title:{title}</h2>
                <p><strong>Author:</strong> {author}</p>
                <p><strong>Category:</strong> {category}</p>
                <Link to={`/book/${book.id}`}>View Details</Link>
                <p className="text-red-900 text-2xl font-bold">View Details</p>
            </div>
        </div>
    );
}

export default Book;

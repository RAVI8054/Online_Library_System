import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function BookDetails() {
    const { id } = useParams();
    const location = useLocation();
    const book = location.state?.book;

    if (!book) return (
        <div className="p-6 text-center">
            <p className="text-red-600 mb-4">
                No book data found. Try navigating from the homepage.
            </p>
            <Link
                to="/"
                className="inline-block text-blue-600 hover:underline font-medium"
            >
                Back to books
            </Link>
        </div>
    );

    return (
        <>
            <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                        <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-full h-auto rounded-md shadow-md"
                        />
                    </div>
                    <div className="md:w-2/3 space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">{book.title}</h2>
                        <p><strong className="text-gray-700">Author:</strong> {book.author}</p>
                        <p><strong className="text-gray-700">Category:</strong> {book.category}</p>
                        <p><strong className="text-gray-700">Description:</strong> {book.description}</p>
                        <p><strong className="text-gray-700">Price:</strong> ${book.price}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <Link
                        to="/"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        ← Back to books
                    </Link>
                </div>
            </div>
        </>
    );
}

export default BookDetails;

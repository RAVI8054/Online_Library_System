import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Error() {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
            <div className="max-w-xl w-full">
                <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
                    Oops! Something went wrong.
                </h1>

                {error?.status && (
                    <p className="text-lg text-gray-700 mb-2">
                        <strong>Status:</strong> {error.status}
                    </p>
                )}
                <p className="text-gray-600 mb-6">
                    {error?.statusText || error?.message || 'An unexpected error occurred.'}
                </p>

                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Error;

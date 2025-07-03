import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
    const error = useRouteError();

    return (
        <div>
            <h1>Something went wrong</h1>
            <p>
                {error.status && <strong>Status:</strong>} {error.status}
            </p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    );
}

export default Error;

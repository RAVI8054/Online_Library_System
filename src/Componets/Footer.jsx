import React from 'react';

function Footer() {
    return (
        <footer className="bg-blue-600 text-white py-6 mt-10">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-blue-100 text-xl italic">
                    "Discover. Read. Grow. Your journey begins here."
                </p>
                <p className="text-blue-200 text-xl mt-2">
                    © {new Date().getFullYear()} Online Book Library. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

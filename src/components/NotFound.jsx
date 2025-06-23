import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-6">This page is under construction or doesn't exist.</p>
                <Link to="/" className="btn btn-neutral rounded-none">Go Back Home</Link>
            </div>

            <div className="mt-10">
                <img
                    src="https://i.imgur.com/qIufhof.png"
                    alt="Under Construction"
                    className="w-72 mx-auto opacity-80"
                />
                <p className="text-sm text-gray-500 mt-2">We're working hard to bring this page to life.</p>
            </div>
        </div>
    );
};

export default NotFound;
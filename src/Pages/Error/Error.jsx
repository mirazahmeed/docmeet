import React from "react";
import { Link } from "react-router";

const Error = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
                <h1 className="text-6xl font-extrabold text-red-600 mb-4">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                    Oops! Page not found
                </h2>
                <p className="text-gray-600 mb-6">
                    The page you're looking for doesn’t exist or an unexpected
                    error occurred.
                </p>
                <Link to="/" className="btn btn-primary normal-case px-6">
                    Go Home
                </Link>
                
            </div>
        </div>
    );
};

export default Error;

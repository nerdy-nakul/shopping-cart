import React from 'react';
import { Link } from 'react-router-dom';

const NoPageFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found.</p>
        <p className="text-gray-500 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out font-semibold"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NoPageFound;

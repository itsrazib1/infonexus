"use client";
import Link from 'next/link';
import { useEffect } from 'react';
const Notfound = ({ error }) => {
    useEffect(() => {
        }, [error]
    );
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg text-gray-600 mb-8">
                    The page you are looking for does not exist.
                    
                </p>
                <Link href="/">
                    <div className="px-4 py-2 text-center bg-blue-500 text-white rounded hover:bg-blue-600">
                        Go back to the homepage
                    </div>
                </Link>
            </div>
        </div>
    );
}



export default Notfound;

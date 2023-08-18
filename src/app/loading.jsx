import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <FaSpinner className="animate-spin text-4xl" />
        </div>
    );
};

export default Spinner;

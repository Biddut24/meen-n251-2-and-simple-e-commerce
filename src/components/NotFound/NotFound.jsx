import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-[#1C2B35] min-h-screen flex flex-col items-center justify-center text-center px-4">
      <img
        src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt="404 Error"
        className="w-64 mb-8 rounded-lg shadow-lg"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-[#FF9900] mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-[#FF9900] text-lg md:text-xl mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-[#FF9900] text-[#1C2B35] font-semibold px-6 py-3 rounded hover:bg-[#e68a00] transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

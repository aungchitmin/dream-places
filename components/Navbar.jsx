import React from "react";

const Navbar = () => {
  return (
    <div className="container sticky top-0 bg-teal-600 flex items-center mx-auto h-20 justify-between">
      <h1 className="text-4xl text-gray-200 font-bold text-center cursor-pointer p-4">
        Goals to go
      </h1>
      <h2 className="text-xl text-gray-200 font-medium text-center cursor-pointer p-4">
        Add Place
      </h2>
    </div>
  );
};

export default Navbar;

import React from "react";

function Navbar() {
  return (
    <nav className="bg-green-600 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold">
          E-Waste Management
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-green-200">
              Home
            </a>
          </li>
          <li>
            <a href="/service" className="text-white hover:text-green-200">
              Service
            </a>
          </li>
          <li>
            <a href="/dashboard" className="text-white hover:text-green-200">
              Dashboard
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

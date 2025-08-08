import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (<>
      <nav className="grid grid-cols-3 grid-rows-1 bg-black/88 p-2 border-b-1 border-gray-600">
        <h2 className="text-white ml-10 text-2xl font-bold"><Link to="/">WhaT ToDo</Link></h2>
        <div className="flex flex-row justify-end mr-10 col-start-3 col-span-1 items-center">
            <ul className="flex flex-row space-x-4">
                <li>
                    <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
                </li>
                <li>
                    <Link to="/contact_us" className="text-white hover:text-gray-300">Contact Us</Link>
                </li>
            </ul>
        </div>
      </nav>
    </>);
}
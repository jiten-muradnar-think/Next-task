"use client"
import React from "react";
import Link from "next/link";

const Navbar = () => {
    
  return (
    <nav className="bg-gray-700 py-4 px-2">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className={`text-white font-bold text-3xl`}>
          Next Application
        </a>
        <ul className="flex gap-6 text-lg">
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/orders" className="text-white">
              Orders
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-white">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

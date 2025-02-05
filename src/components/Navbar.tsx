'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex justify-between items-center p-4 bg-[#B7EFF8B2]">
      {/* Logo */}
    <Link href="/">
    <img src="./assets/logo.png" alt="Logo" width="80px" />
    </Link>

      {/* Hamburger button for mobile */}
      <button 
        className="md:hidden text-xl focus:outline-none" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Navigation for small devices (sm) */}
      <div className={`absolute top-full left-0 w-full  bg-[#B7EFF8B2] md:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-4'}`}>
        <Link href="/" className="block px-4 py-2">HOME</Link>
        <Link href="/about" className="block px-4 py-2">ABOUT</Link>
        <Link href="/services" className="block px-4 py-2">SERVICES</Link>
        <Link href="/contact" className="block px-4 py-2">CONTACT US</Link>
        <h2 className="border border-black px-6 py-2 w-28 rounded-full shadow-lg">NEWS</h2>
      </div>

      {/* Navigation for medium and larger devices (md and up) */}
      <div className="hidden md:flex md:flex-row md:space-x-10 font-semibold md:items-center ">
        <Link href="/" className="px-4 py-2">HOME</Link>
        <Link href="/about" className="px-4 py-2">ABOUT</Link>
        <Link href="/services" className="px-4 py-2">SERVICES</Link>
        <Link href="/contact" className="px-4 py-2">CONTACT US</Link>
        <button className="border border-black px-6 py-2 w-36 rounded-full shadow-lg">NEWS</button>
      </div>
    </div>
  );
}

export default Navbar;

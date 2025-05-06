import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 fixed w-full shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          
             {/* Logo */}
<div className="relative w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
  <div className="bg-blue-400 h-7 w-7 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full absolute top-0 left-0 z-0 animate-pulse"></div>
  <div className="bg-purple-400 h-7 w-7 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full absolute top-0 left-[1.25rem] sm:left-[1rem] md:left-[1.25rem] lg:left-[1.5rem] z-10 animate-pulse"></div>
  <div className="bg-red-400 h-7 w-7 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full absolute top-0 left-[2.5rem] sm:left-[2rem] md:left-[2.5rem] lg:left-[3rem] z-20 animate-pulse"></div>
</div>

          {/* Desktop Centered Links */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
            <a href="#" className="text-gray-950 hover:text-gray-400 transition font-bold">About Us</a>
            <a href="#" className="text-gray-950 hover:text-gray-400 transition font-bold">Destinations</a>
            <a href="#" className="text-gray-950 hover:text-gray-400 transition font-bold">Our Blog</a>
          </div>

          {/* Desktop Download Button */}
          <div className="hidden md:block">
            <button className="text-black px-4 py-2 rounded-full border-2 border-black hover:bg-gray-300 transition">
              Download App
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-In Mobile Sidebar */}
      <div
        className={`pt-20 fixed top-0 right-0  w-1/2 bg-gray-100 shadow-md p-6 space-y-6 z-40 transform transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <a href="#" className="block text-gray-950 hover:text-blue-400 transition font-bold text-center">About Us</a>
        <a href="#" className="block text-gray-950 hover:text-blue-400 transition font-bold text-center">Destinations</a>
        <a href="#" className="block text-gray-950 hover:text-blue-400 transition font-bold text-center">Our Blog</a>
        <button className="block mx-auto text-black px-4 py-2 rounded-full border-2 border-black hover:bg-gray-300 transition">
          Download App
        </button>
      </div>
    </nav>
  );
}

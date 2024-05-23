
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white uppercase">Fitness</span>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
        <ul className="flex flex-col md:flex-row md:space-x-4 md:mt-0">
                     <li><Link to="#home" className="block py-2 px-4 text-gray-400 hover:text-gray-900 font-bold text-[20px] ">Home</Link></li>
                     <li><Link to="#overview" className="block py-2 px-4 text-gray-400 hover:text-gray-900 font-bold text-[20px] ">About</Link></li>
                     <li><Link to="#trainer" className="block py-2 px-4 text-gray-400 hover:text-gray-900 font-bold text-[20px] ">Trainers</Link></li>
                     <li><Link to="#blog" className="block py-2 px-4 text-gray-400 hover:text-gray-900 font-bold text-[20px] ">Blog</Link></li>
                     <li><Link to="#price" className="block py-2 px-4 text-gray-400 hover:text-gray-900 font-bold text-[20px] ">Prices</Link></li>
                     <li><Link to="#testimonial" className="block py-2 px-4 text-gray-400 hover:text-gray-900 font-bold text-[20px] ">Testimonials</Link></li>
                 </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

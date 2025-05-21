import React, { useState, useEffect } from 'react';
import config from '../config';

const SectionA = ({ businessName = config.businessName }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`block w-full px-4 py-2 sticky top-0 z-[9999] backdrop-blur-lg transition-all duration-300 ${
        isScrolled
          ? 'bg-white bg-opacity-90 shadow backdrop-saturate-150'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between text-orange-800">
        {/* Business Name */}
        <a
          href="#landing"
          className="mr-4 block cursor-pointer py-1.5 text-base text-orange-800 font-semibold"
        >
          {businessName}
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <a href="#landing" className="flex items-center">
                Home
              </a>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <a href="#about" className="flex items-center">
                About
              </a>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <a href="#services" className="flex items-center">
                Services
              </a>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <a href="#location" className="flex items-center">
                Location
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-orange-500 rounded shadow hover:bg-orange-600"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default SectionA;
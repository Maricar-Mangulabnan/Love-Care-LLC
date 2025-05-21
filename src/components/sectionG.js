import React from 'react';
import BizSolutionsIcon from '../assets/icons/bizSolutions-icon.png';
import { FaRegCopyright } from "react-icons/fa";
import config from '../config';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  const { businessName } = config.sections.header || {};

  return (
    <footer className="block w-full px-4 py-2 bg-orange-500 shadow-md lg:px-8 lg:py-3 mt-10">
      <div className="flex flex-wrap items-center justify-between text-black">
        <div className="flex items-center gap-2">
          <FaRegCopyright className="text-sm" />
          <span className="text-sm font-light">
            {currentYear} {businessName || "Business Name"}
          </span> 
        </div>

        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <li className="flex items-center p-1 text-sm gap-x-2">
            <a 
              href="https://mybizsolutions.us/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2"
            >
              Powered by:
              <img
                src={BizSolutionsIcon}
                alt="BizSolutions Icon"
                className="h-6 w-auto"
              />
              BizSolutions LLC
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
    </footer>
  );
};

export default Footer;
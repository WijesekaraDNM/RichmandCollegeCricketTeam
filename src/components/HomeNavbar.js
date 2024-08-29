import React, { useState } from 'react';
import Logo from '../assets/images/rcclogo.png'; // import your logo image
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    home: false,
    matches: false,
    news: false,
    aboutUs: false,
    teams: false,
  });

  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className="bg-black bg-opacity-70 p-1 fixed w-full z-30 top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div>
          <img src={Logo} alt="School Logo" className="h-14 ml-28" />
        </div>

        {/* Centered Navbar Items */}
        <ul className="flex space-x-8 text-white font-semibold text-lg relative">
          <li className="relative group">
            <button
              className="hover:text-yellow-300"
              onClick={() => toggleDropdown('home')}
            >
              Home
            </button>
            {isDropdownOpen.home && (
              <ul className="absolute left-0 mt-2 w-40 bg-black text-white border border-gray-700 z-40">
                <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
                  <Link to="/sub-item1">Sub Item 1</Link>
                </li>
                <li className="p-2 hover:bg-gray-800">
                  <Link to="/sub-item2">Sub Item 2</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="hover:text-yellow-300"
              onClick={() => toggleDropdown('matches')}
            >
              Matches
            </button>
            {isDropdownOpen.matches && (
              <ul className="absolute left-0 mt-2 w-40 bg-black text-white border border-gray-700 z-40">
                <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
                  <Link to="/under-11">Under 11</Link>
                </li>
                <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
                  <Link to="/under-13">Under 13</Link>
                </li>
                <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
                  <Link to="/under-15">Under 15</Link>
                </li>
                <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
                  <Link to="/under-17">Under 17</Link>
                </li>
                <li className="p-2 hover:bg-gray-800">
                  <Link to="/under-19">Under 19</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="hover:text-yellow-300"
              onClick={() => toggleDropdown('news')}
            >
              News
            </button>
            {isDropdownOpen.news && (
              <ul className="absolute left-0 mt-2 w-40 bg-black text-white border border-gray-700 z-40">
                <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
                  <Link to="/news-1">News Item 1</Link>
                </li>
                <li className="p-2 hover:bg-gray-800">
                  <Link to="/news-2">News Item 2</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="hover:text-yellow-300"
              onClick={() => toggleDropdown('aboutUs')}
            >
              About Us
            </button>
            {isDropdownOpen.aboutUs && (
              <ul className="absolute left-0 mt-2 w-40 bg-black text-white border border-gray-700 z-40">
                <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
                  <Link to="/history">History</Link>
                </li>
                <li className="p-2 hover:bg-gray-800">
                  <Link to="/mission">Mission</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="hover:text-yellow-300"
              onClick={() => toggleDropdown('teams')}
            >
              Teams
            </button>
            {isDropdownOpen.teams && (
              <ul className="absolute left-0 mt-2 w-40 bg-black text-white border border-gray-700 z-40">
                <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
                  <Link to="/team-a">Team A</Link>
                </li>
                <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
                  <Link to="/team-b">Team B</Link>
                </li>
                <li className="p-2 hover:bg-gray-800">
                  <Link to="/team-c">Team C</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Right section (optional), you can add a search bar or profile menu here */}
        <div className="hidden md:block">
          {/* Additional items can be added here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

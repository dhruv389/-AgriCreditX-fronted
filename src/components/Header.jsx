import React, { useState, useEffect } from "react";
import { 
  FaLeaf, FaHome, FaUsers, FaFileAlt, FaChartPie, FaChartBar, FaCog, 
  FaSignOutAlt, FaBell, FaUserCircle, FaSeedling, FaHandHoldingUsd
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { signInWithGoogle, logout, listenForAuthChanges } from "../firebase/firebase";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [user, setUser] = useState(null);

  // Listen for Firebase Auth State Changes
  useEffect(() => {
    listenForAuthChanges(setUser);
  }, []);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 ' : 'py-4 '}`}>
      <div className="backdrop-blur-md bg-gray-900/30 w-[98vw] rounded-3xl mx-auto px-6 border-b border-gray-800/50" style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}>
        <div className="flex justify-between items-center py-[1rem]">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-2 py-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-30 animate-pulse"></div>
              <FaSeedling className="relative text-green-400 text-3xl" />
            </div>
            <div className="font-bold text-xl tracking-wider">
              <span className="text-white">Agri</span>
              <span className="text-green-400">CreditX</span>
            </div>
          </Link>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* User Profile */}
            <div className="relative">
              {user ? (
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2">
                  <img src={user.photoURL} alt="" className="h-[2rem] w-[2rem] rounded-full object-cover" />
                  <span className="hidden md:block text-white">{user.displayName}</span>
                </button>
              ) : (
                <button onClick={signInWithGoogle} className="text-white hover:text-green-400 transition">
                  Login with Google
                </button>
              )}

              {/* Profile Dropdown */}
              {dropdownOpen && user && (
                <div className="absolute right-0 mt-2 w-48 backdrop-blur-md bg-gray-900/90 rounded-lg shadow-lg border border-gray-800/50">
                  <a href="/bankprofile" className="block p-3 text-white hover:bg-gray-800/50 transition">Profile</a>
                  <Link to="/dashboard" className="block p-3 text-white hover:bg-gray-800/50 transition">Dashboard</Link>
                  <Link href="#" className="block p-3 text-white hover:bg-gray-800/50 transition">Settings</Link>
                  <div className="border-t border-gray-800/50">
                    <button onClick={logout} className="block w-full p-3 text-white hover:bg-gray-800/50 flex items-center space-x-2">
                      <FaSignOutAlt className="text-green-400" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Header;

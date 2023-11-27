import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="group flex items-center space-x-1">
          <h1 className="font-bold text-xl md:text-2xl">
            <span className="text-slate-500">TODO</span>
            <span className="text-slate-700">APP</span>
          </h1>
        </Link>
        <form
          // onSubmit={handleSubmit}
          className="hidden md:flex bg-slate-100 p-3 rounded-lg items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 md:w-64"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <div className="flex items-center space-x-4">
          <Link to="/signin" className="text-slate-600 nav-link">
            Sign In
          </Link>
          <Link to="/signup" className="text-slate-600 nav-link">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

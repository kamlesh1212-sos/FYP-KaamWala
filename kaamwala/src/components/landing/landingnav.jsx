import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LogoWhite from "../../assets/images/LogoWhite.svg";

const Landingnav = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-medium text-blue-500 mr-4">
                Kaam-Wala
              </a>
              <Link
                to="/VendorRegistrationForm"
                className="text-lg font-medium hover:text-blue-500"
              >
                Register for Vendor
              </Link>
            </div>
            <nav className="flex items-center">
              <form className="flex items-center mx-4">
                <input
                  type="text"
                  placeholder="Search for jobs, candidates, etc."
                  className="w-64 p-2 bg-gray-200 rounded-full"
                />
                <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 ml-4">
                  Search
                </button>
              </form>
              <a className="text-lg font-medium mx-6 hover:text-blue-500">
                Contact
              </a>
              <Link
                to="/login"
                className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
              >
                Sign In
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Landingnav;

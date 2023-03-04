import React from "react";
import skilledlabor from "./../../assets/images/skilledlabor.jpg";
import cook from "./../../assets/images/cook.png";
import delivery from "./../../assets/images/delivery.png";
import driver from "./../../assets/images/driver.jpeg";
import carpenter from "./../../assets/images/Carpenter.png";
import catering from "./../../assets/images/catering.png";
import painter from "./../../assets/images/painter.png";
import welding from "./../../assets/images/welding.avif";
import { Link, Outlet } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className={`font-sans div bg-cover bg-center bg-[url(https://unsplash.com/photos/XZofvddpbwc)] w-full`}
    >
      <div className="container mx-auto py-16">
        <div className="container mx-auto py-16">
          <div className="flex justify-between">
            <div className="w-1/2 py-8">
              <div className="text-center">
                <h2 className="text-5xl font-medium text-indigo-800 py-8 hover:text-indigo-500">
                  Kaam-Wala
                </h2>
                <h1 className="text-4xl font-medium py-1 text-indigo-600">
                  Find Your Skilled Workforce
                </h1>
                <p className="text-sm py-1">
                  Connecting businesses with skilled manpower for their projects
                </p>
              </div>
              <p className="text-base py-8">
                Kaam-Wala is a platform that connects businesses with skilled
                manpower for their projects. We understand the importance of
                having the right workforce for your projects and that's why we
                are here to help. Our mission is to simplify the process of
                finding and hiring skilled manpower for businesses.
              </p>
            </div>
            <div className="w-1/2 py-8">
              <img
                src={skilledlabor}
                className="h-64 w-64 rounded-lg object-cover mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold text-indigo-700">
            Discover the Ideal Assistance for You Today
          </h2>
          <div className="flex mt-8">
            <div className="w-1/4 p-4 text-center">
              <img src={cook} alt="Cook Icon" className="h-16 w-16 mx-auto" />
              <p className="mt-2 text-base font-medium">Cook</p>
            </div>
            <div className="w-1/4 p-4 text-center">
              <img
                src={painter}
                alt="Painter Icon"
                className="h-16 w-16 mx-auto"
              />
              <p className="mt-2 text-base font-medium">Painter</p>
            </div>
            <div className="w-1/4 p-4 text-center">
              <img
                src={carpenter}
                alt="Carpenter Icon"
                className="h-16 w-16 mx-auto"
              />
              <p className="mt-2 text-base font-medium">Carpenter</p>
            </div>
            <div className="w-1/4 p-4 text-center">
              <img
                src={catering}
                alt="Catering Icon"
                className="h-16 w-16 mx-auto"
              />
              <p className="mt-2 text-base font-medium">Catering</p>
            </div>

            <div className="w-1/4 p-4 text-center">
              <img
                src={driver}
                alt="Driver Icon"
                className="h-16 w-16 mx-auto"
              />
              <p className="mt-2 text-base font-medium">Driver</p>
            </div>
            <div className="w-1/4 p-4 text-center">
              <img
                src={welding}
                alt="Welding Icon"
                className="h-16 w-16 mx-auto"
              />
              <p className="mt-2 text-base font-medium">Welding</p>
            </div>
            <div className="w-1/4 p-4 text-center">
              <img
                src={delivery}
                alt="Delivery Icon"
                className="h-16 w-16 mx-auto"
              />
              <Link
                to="/ElectricianServices"
                className="mt-2 text-base font-medium"
              >
                Delivery
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600">
            View More
          </button>
        </div>
      </div>
      <footer className="bg-blue-900 py-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-white text-sm font-medium">Kaam-Wala</p>
          <div className="flex items-center">
            <a
              href="#"
              className="text-white text-sm mr-6 hover:text-indigo-500"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-sm mr-6 hover:text-indigo-500"
            >
              Blogs
            </a>
            <a
              href="#"
              className="text-white text-sm mr-6 hover:text-indigo-500"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-white text-sm mr-6 hover:text-indigo-500"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white text-sm hover:text-indigo-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

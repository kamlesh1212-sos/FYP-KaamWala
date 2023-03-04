import React from "react";
import delivery_one from "./../../assets/images/Delivery_one.png";
import delivery_two from "./../../assets/images/Delivery_two.png";
import delivery_three from "./../../assets/images/Delivery_three.png";

function ElectricianServices() {
  return (
    <div>
      {/* Header with Electrician name centered */}
      <header className="text-center py-10 bg-gray-100">
        <h1 className="text-4xl font-bold">Delivery</h1>
      </header>

      {/* Category section */}
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full"
                src={delivery_one}
                alt="Category 1 Image"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Around 5KM</h3>
                <p className="text-gray-700 text-base mb-2">delivery ktm. </p>
                <p className="text-gray-700 text-base font-bold mb-2">
                  Rs. 100
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Book Now
                </button>
              </div>
            </div>

            {/* Category 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full"
                src={delivery_two}
                alt="Category 2 Image"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Around 10KM</h3>
                <p className="text-gray-700 text-base mb-2">delivery nepal. </p>
                <p className="text-gray-700 text-base font-bold mb-2">
                  Rs. 150
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Book Now
                </button>
              </div>
            </div>

            {/* Category 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full"
                src={delivery_three}
                alt="Category 3 Image"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Around 20KM</h3>
                <p className="text-gray-700 text-base mb-2">
                  delivery tarahara{" "}
                </p>
                <p className="text-gray-700 text-base font-bold mb-2">Rs.200</p>
                <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Book Now
                </button>
              </div>
            </div>
            {/* Repeat for more categories as needed */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ElectricianServices;

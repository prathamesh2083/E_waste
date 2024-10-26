import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
     

      {/* Hero Section */}
      <section className="  py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-green-600">
            Welcome to E-Waste Management
          </h1>
          <p className="text-lg mb-8">
            Helping you dispose of electronic waste responsibly and sustainably.
          </p>
          
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-700">
          We are dedicated to promoting a cleaner, greener future by managing
          e-waste with eco-friendly practices. From recycling old gadgets to
          safe disposal methods, our goal is to reduce electronic waste in our
          environment.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-green-700">
                Electronic Recycling
              </h3>
              <p className="text-gray-600">
                Proper recycling of old electronics to prevent environmental
                hazards.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-green-700">
                Safe Disposal
              </h3>
              <p className="text-gray-600">
                Secure and responsible disposal of electronic components.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-green-700">
                Data Destruction
              </h3>
              <p className="text-gray-600">
                Ensure your data is securely wiped before recycling electronics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 E-Waste Management. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

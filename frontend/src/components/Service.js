import React, { useState } from "react";
import {
  AlertCircle,
  Trash2,
  RecycleIcon,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

const Service = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    wasteType: "electronics",
    quantity: "",
    pickupDate: "",
    description: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res=await fetch("http://localhost:4000/create",{

        method:"POST",
        headers:{
        "Content-type":"application/json",
        },
        body:JSON.stringify(formData)

    })
       toast.success("E-waste request send successfully");
    }
    catch(err){
      toast.error("error in sending request");
      console.log(err);
    }
    // Here you would typically make an API call to your backend
    
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            E-Waste Collection Portal
          </h1>
          <p className="text-gray-600 mb-4">
            Responsible disposal for a sustainable future
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Total Collections
              </span>
              <RecycleIcon className="text-green-600" />
            </div>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-gray-500">+20% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Active Requests
              </span>
              <AlertCircle className="text-blue-600" />
            </div>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-gray-500">Pending pickup</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Impact</span>
              <Trash2 className="text-orange-600" />
            </div>
            <div className="text-2xl font-bold">5.2 tons</div>
            <p className="text-xs text-gray-500">E-waste processed</p>
          </div>
        </div>

        {/* Collection Request Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">
            Schedule E-Waste Collection
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Waste Type
                </label>
                <select
                  name="wasteType"
                  value={formData.wasteType}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="electronics">Electronics</option>
                  <option value="batteries">Batteries</option>
                  <option value="appliances">Appliances</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity (kg)
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Pickup Date
              </label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Details
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              Submit Collection Request
            </button>
          </form>
        </div>

        {/* Info Alert */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-blue-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Important Information
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                We collect all types of electronic waste including computers,
                phones, tablets, and household appliances. Please ensure all
                devices are properly disconnected and data is backed up before
                collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

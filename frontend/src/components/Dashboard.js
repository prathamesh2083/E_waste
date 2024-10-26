// Dashboard.jsx
import React, { useEffect, useState } from "react";
// import axios from "axios";

function Dashboard() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend

    return async () => {
      try {
        var res = await fetch("http://localhost:4000/getAllRequests", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
       res=await res.json();
       setRequests(res.data);
        // console.log(res.data);

      } catch (err) {
         
        console.log(err);
      }
      setLoading(false);
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">E-Waste Requests Dashboard</h1>

      {requests?.length === 0 ? (
        <p>No requests available.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Address</th>
              <th className="py-2 px-4 border">Waste Type</th>
              <th className="py-2 px-4 border">Quantity</th>
              <th className="py-2 px-4 border">Description</th>
              <th className="py-2 px-4 border">Pickup Date</th>
              <th className="py-2 px-4 border">Request Date</th>
            </tr>
          </thead>
          <tbody>
            {requests?.map((request) => (
              <tr key={request._id} className="text-center">
                <td className="py-2 px-4 border">{request.name}</td>
                <td className="py-2 px-4 border">{request.phone}</td>
                <td className="py-2 px-4 border">{request.address}</td>
                <td className="py-2 px-4 border">{request.wasteType}</td>
                <td className="py-2 px-4 border">{request.quantity}</td>
                <td className="py-2 px-4 border">{request.description}</td>
                <td className="py-2 px-4 border">
                  {new Date(request.pickupDate).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border">
                  {new Date(request.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;

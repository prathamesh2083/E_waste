import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';  // Make sure this line is present
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Service from './components/Service';
// import { Route  } from 'lucide-react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer /> {/* Add this line */}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


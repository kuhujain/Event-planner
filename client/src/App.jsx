import React from 'react'
import Navbar from"./components/Navbar";
import Hero from "./components/Hero";
import Home from"./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import {Toaster} from "react-hot-toast";
import UserDashboard from './pages/UserDashboard';


const App = () => {
  return (
    <>
     <BrowserRouter>
     <Toaster/>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />
         <Route path="/Register" element={<Register />} />
          <Route path="/UserDashboard" element={<UserDashboard/>} />
         
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App;
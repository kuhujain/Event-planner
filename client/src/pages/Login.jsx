import React, { useState } from "react";
import image from "../assets/image.jpg";
import { useNavigate } from "react-router-dom";
import api from "../config/api";
import toast from "react-hot-toast";



const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit= async(e) => {
    e.preventDefault();
    const logindata = {
      email: email,
      password: password,
    }
     try{
          const res = await api.post("/auth/login",logindata);
          toast.success(res.data.message)
          setPassword("");
          setEmail("");
          navigate("/UserDashboard")
        }catch(error){
         toast.error(`Error : ${error.response?.status || error.message}| ${error.response?.data.message || " "}`)
        }
  }

  return (
    <>
      <div className="mt-[-10%] relative h-screen flex justify-center items-center">
        <img
          src={image}
          alt=""
          className="absolute -z-1 opacity-80 w-full"
        />

        <div className="min-h-screen w-200 flex items-center justify-center font-serif mt-30">
          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border border-black-500">
            <h2 className="text-3xl text-center font-bold text-blue-900 mb-6 drop-shadow-md"> 
              Login
            </h2>
            <form className="space-y-5" onSubmit={formSubmit}>
              <div>
                <label className="text-blue-900 block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-black placeholder:text-gray-500 border border-black-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-blue-900 block mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-black placeholder:text-gray-500 border border-black-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-900 to-blue-950 text-[#0f172a] font-semibold py-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
              >
                Sign In
              </button>
            </form>
            <p className="text-center text-sm text-black mt-6">
              Don't have an account?{" "}
              <span
                className="text-blue-400 underline cursor-pointer"
                onClick={() => navigate("/Register")}
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
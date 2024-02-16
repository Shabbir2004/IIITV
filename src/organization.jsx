import React from "react";
import { useNavigate } from "react-router-dom";
import my from './assets/five.jpg';

export default function Organization(){
    const Navigate = useNavigate();
    return(
        <>
      <div className="relative flex h-screen w-screen">
  <div className="w-1/2 h-full">
    <img src={my} className="h-full w-full object-cover" alt="" />
  </div>

  <div className="w-1/2 flex justify-center items-center">
    <div className="w-[30%] p-4 backdrop-blur-md rounded-xl border-2 border-slate-300">
      <h1 className="text-3xl font-bold text-white font-mono mb-4">Register</h1>
      
      <form action="" className="space-y-4">
        <input type="text" placeholder="Provider's Name" className="w-full p-3 rounded-full text-black" />
        <input type="text" placeholder="Location" className="w-full p-3 rounded-full text-black" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded-full text-black" />
        <input type="password" placeholder="Password" className="w-full p-3 rounded-full text-black" />
        <button className="w-full p-3 rounded-full bg-blue-700 text-white font-semibold" onClick={()=>{Navigate("/orgdet")}}>Sign In</button>
      </form>

      <div className="text-center mt-4">
        <span className="text-slate-200">Already have an account? </span>
        <button className="text-blue-700 font-semibold" onClick={()=>{Navigate("/org")}}>Login</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

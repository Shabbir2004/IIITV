import React from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import images from './assets/rooms.jpeg';
import background from './assets/room.gif';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Signup(){
  const Navigate = useNavigate();

    return (
        <>
  
  <body className="bg-gradient-to-r from-cyan-800 to bg-cyan-950">

    <div className="h-screen flex justify-center items-center p-4 h-800px ">
        <div className="flex flex-col gap-y-9 w-[300px]  border-gray-400 m-4 p-2 rounded-xl  ">
            <h2 className="text-4xl font-extrabold text-white ">Register</h2>
            <form className="flex flex-col gap-y-6 border-3 border-black">
                <input type="text" placeholder="Provider's Name" className="text-sm p-2 rounded-2xl bg-white outline-none tracking-widest  text-black"/>
                <input type="text" placeholder="Location" className="text-sm p-2 rounded-2xl bg-white outline-nonetracking-widest text-black"/>
                <input type="text" placeholder="Email" className="text-sm p-2 rounded-2xl bg-white outline-nonetracking-widest text-black"/>
                <input type="password" placeholder="Password" className="text-sm p-2 rounded-2xl bg-white-200 outline-nonetracking-widest text-black"/>

                <input type="submit" value="Register" className="bg-green-200 text-black tracking-wider p-2 rounded-2xl hover:bg-cyan-500 transition"/>

            </form>
      
          
            <div className="flex flex-col items-start gap-y-3">
                <p className="text-sm text-white font-bold">Already have an account?</p>
                <button className="bg-red-400 text-white px-4 py-1 rounded-2xl text-sm tracking-wider hover:bg-red-500 transition">Login</button>
            
            </div>
        </div>
        <div className="relative w-[600px] grid place-items-center">
        
          {/* <img src={images} alt="" className="absolute rounded-2xl m-4"/> */}
          <img src={background} alt="" className=" rounded-2xl m-4" id="animation" />
        </div>
    </div>
  </body>
     
       </>
    )
}
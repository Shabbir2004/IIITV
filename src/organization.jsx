import React from "react";
import { useNavigate } from "react-router-dom";
import my from './assets/room.gif';

export default function Organization(){
    const Navigate = useNavigate();
    return(
        <>
     <body className="bg-gradient-to-r from-cyan-800 to bg-cyan-950">

<div className="h-screen flex justify-center items-center p-4 h-800px ">
    <div className="flex flex-col gap-y-9 w-[300px]  border-gray-400 m-4 p-1 rounded-xl  ">
        <button className="text-4xl font-extrabold text-white " onClick={()=>{Navigate("/provdet")}}>Organization Details</button> 
        <form className="flex flex-col gap-y-8 border-3 border-black">
            <input type="text" placeholder="Provider's Name" className="text-sm p-2 rounded-2xl bg-white outline-none tracking-widest  text-black"/>
            {/* <input type="text" placeholder="Supporting Proofs Of Your Organization" className="text-sm p-2 rounded-2xl bg-white outline-none tracking-widest  text-black"/> */}

            <input type="text" placeholder="Location" className="text-sm p-2 rounded-2xl bg-white outline-nonetracking-widest text-black"/>
            <input type="text" placeholder="Email" className="text-sm p-2 rounded-2xl bg-white outline-nonetracking-widest text-black"/>
            <input type="password" placeholder="Password" className="text-sm p-2 rounded-2xl bg-white-200 outline-nonetracking-widest text-black"/>

            <input type="submit" onClick={()=>{Navigate("/orgdet")}} value="Register" className="bg-green-200 text-black tracking-wider p-2 rounded-2xl hover:bg-cyan-500 transition"/>

        </form>
  
      
        <div className="flex flex-col items-start gap-y-3">
            <p className="text-sm text-white font-bold" >Already have an account?</p>
            <button className="bg-red-400 text-white px-4 py-1 rounded-2xl text-sm tracking-wider hover:bg-red-500 transition" >Login</button>
        
        </div>
    </div>
    <div className="relative w-[600px] grid place-items-center">
    
      {/* <img src={images} alt="" className="absolute rounded-2xl m-4"/> */}
      <img src={my} alt="" className=" rounded-2xl m-4" id="animation" />
    </div>
</div>
</body>
 
        </>
    )
}

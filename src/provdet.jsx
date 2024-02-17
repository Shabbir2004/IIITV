import React from "react";
import { useNavigate } from "react-router-dom";
import back from './assets/five.jpg'

const Provdet=()=>{
    const Navigate = useNavigate();
    return(
        <>
        <body>
        <div className="w-full h-screen flex items-start bg-gradient-to-r from-cyan-800 to bg-cyan-950 ">
        <div className=" relative w-1/2 h-full flex flex-col bg-gradient-to-r from-cyan-800 to bg-cyan-950">
          <div className="absolute top-[10%] left-[10%] flex flex-col">
           <h1 className="text-8xl text-white font-bold my-4">Turn Your Food Into Charity</h1>
           <p className="text-2xl text-white font-normal">Start Donating Your Food Instead of Wasting</p>
          </div>
           <img src={back} className="w-full h-full object-cover"/>
        </div>
        <div className="w-1/2 h-full bg-gradient-to-r from-cyan-800 to bg-cyan-950 flex flex-col p-20 justify-between">
              
              <div className="w-full flex flex-col"> 
                <div className="w-full flex flex-col mb-5">
                <h3 className="text-4xl text-white font-bold mb-4">Kindly Fill</h3>
                <p className="text-2xl text-white mb-2">Enter Your Details !</p>
                </div>
                
                <div className="w-full flex flex-col">
                  <input type="text" placeholder="Type of food (Veg Or Non-Veg)" className="w-full text-white py-4 my-2 bg-transparent bg-none border-b border-black outline-none focus:outline-none"/>

                  <input type="text" placeholder="Name of food" className="w-full text-white py-4 my-4 bg-transparent bg-none border-b border-black outline-none focus:outline-none"/>

                  <input type="text" placeholder="Quantity of food" className="w-full text-white py-4 bg-transparent my-4 bg-none border-b border-black outline-none focus:outline-none"/>

                  <input type="text" placeholder="Pick Up Time Slot" className="w-full text-white py-4 bg-transparent my-4 bg-none border-b border-black outline-none focus:outline-none"/>

                  <input type="date" placeholder="Manifacture Date" className="w-full text-white py-4 my-4 bg-transparent bg-none border-b border-black outline-none focus:outline-none"/>

                  <input type="date" placeholder="Expiry Date" className="w-full text-white py-4 my-4 bg-transparent bg-none border-b border-black outline-none focus:outline-none"/>
                </div>

                <div className="w-full flex flex-col">
                  <button className="w-full text-white bg-red-400 rounded-xl p-4 text-center flex items-center justify-center hover:bg-black transition" onClick={()=>{Navigate("/provider")}}>ENTER</button>
                </div>

              </div>

              <div>

              </div>
        </div>
          </div>  
          </body>
        </>
    )
}
export default Provdet;
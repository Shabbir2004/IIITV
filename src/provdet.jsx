import React from "react";
import { useNavigate } from "react-router-dom";
import back from './assets/five.jpg'

const Provdet=()=>{
    const Navigate = useNavigate();
    return(
        <>
    <style>
        {`
          @keyframes slideDown {
            0% { transform: translateY(-100%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-slideDown {
            animation: slideDown 0.5s ease-out forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
        `}
      </style>
      <div className="relative flex justify-center items-center h-screen w-screen overflow-hidden">
        {/* Background image with slide-down animation */}
        <div className="absolute top-0 left-0 w-full h-full">
          <img src={back} className="h-screen w-screen object-cover animate-slideDown" alt="" />
        </div>

        <div className="w-[50%] h-[90%] flex flex-col justify-center items-center gap-15 animate-fadeIn">
          <div className="border-white border-2 p-8 rounded-3xl flex flex-col justify-center shadow-xl relative z-10 col-span-1 backdrop-blur-md ">
            <header className="flex justify-between items-center mb-10">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold text-yellow-300 uppercase ml-10 mr-10">Fill Details For Donation</h2>
              </div>
            </header>
            <form className="flex flex-col gap-1">
              <div className="">
                <label htmlFor="typeOfFood" className="block text-xl font-semibold mb-2 text-white">Type of Food</label>
                <select id="typeOfFood" className="w-full px-4 py-3 bg-white rounded-full focus:outline-none">
                  <option value="">Select type</option>
                  <option value="vegetarian">Raw</option>
                  <option value="non-vegetarian">Ready Made</option>
                  <option value="vegan">Both</option>

                </select>
              </div>

              <div className=" ">
                <label htmlFor="quantityOfFood" className="block text-xl font-semibold mb-2 text-white">Name of Food</label>
                <input type="text" id="quantityOfFood" className="w-full px-4 py-3 bg-white rounded-full focus:outline-none" placeholder="Enter" />
              </div>

              <div className=" ">
                <label htmlFor="quantityOfFood" className="block text-xl font-semibold mb-2 text-white">Quantity of Food</label>
                <input type="text" id="quantityOfFood" className="w-full px-4 py-3 bg-white rounded-full focus:outline-none" placeholder="Enter" />
              </div>


              <div className=" ">
                <label htmlFor="pickupTimeSlot" className="block text-xl font-semibold mb-2 text-white">Pick Up Time Slot</label>
                <select id="pickupTimeSlot" className="w-full px-4 py-3 bg-white rounded-full focus:outline-none">
                  <option value="">Select time slot</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>

                </select>
              </div>
              <div className=" ">
                <label htmlFor="deliveryAddress" className="block text-xl font-semibold mb-2 text-white">Manufacture Date</label>
                <input type="date" id="deliveryAddress" className="w-full px-4 py-3 bg-white rounded-full focus:outline-none" placeholder="Enter" />
              </div>
              <div className=" ">
                <label htmlFor="mobileNumber" className="block text-xl font-semibold mb-2 text-white">Expiry Date</label>
                <input type="date" id="mobileNumber" className="w-full px-4 py-3 bg-white rounded-full focus:outline-none" placeholder="Enter" />
              </div>

              <div className="h-full w-[70%] flex flex-col justify-center items-center mt-4 ">
                <button className="text-slate-200 p-4 rounded-full font-semibold backdrop-blur-md border-slate-300 border-4 text-2xl px-16 hover:text-3xl font-serif ml-20" onClick={() => { Navigate("/provider") }}>Enter</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>
    )
}
export default Provdet;
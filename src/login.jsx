import React from "react";
import  "./login.css";
import { useNavigate } from "react-router-dom";
import background from './assets/login.png';
import logo from './assets/logo.png';


export default function Login(){
  const Navigate = useNavigate();

    return(
        <>
               <body className="bg-gradient-to-r from-cyan-800 to bg-cyan-950 h-screen w-screen">
                <div className="container min-h-screen bg-center bg-cover px-28 py-5 relative">
                    <nav className="flex items-center">
                        <img src={logo} className="w-30 h-10 cursor-pointer"/>
                ``           <ul className="flex-1 text-center">
                            
                            <li className="list-none inline-block px-9 ml-80"><a href="#" className="no-underline text-white font-bold px-2">Home</a></li>
                            <li className="list-none inline-block px-9"><a href="#" className="no-underline text-white font-bold px-2">About</a></li>
                            <li className="list-none inline-block px-9"><a href="#" className="no-underline text-white font-bold px-2">Features</a></li>
                            <li className="list-none inline-block px-9"><a href="#" className="no-underline text-white font-bold px-2">Contact</a></li>
                           
                        </ul>
                    </nav>
                    <div className="mt-48 mr-40">
                      <h3 className="text-2xl text-white font-semibold">Food's Good</h3>  
                      <h1 className="text-6xl text-white font-semibold">Save Food,Charity matters</h1>
                      <div className="mt-20">
                        <a href="#" className="bg-yellow-300 border-2 rounded-3xl py-4 px-12 font-medium text-2xl inline-block mr-20 hover:text-3xl" onClick={()=>{Navigate("/signup")}}>Provider</a>
                        <a href="#" className="bg-yellow-300 border-2 rounded-3xl py-4 px-9 font-medium text-2xl inline-block hover:text-3xl "  onClick={()=>{Navigate("/organization")}}>Organization</a>

                      </div>
                    </div>
                    <div className="ml-400">
                    <img src={background} alt="" className="xl:w-1/2 xl:absolute bottom-0 right-20"/>
                    </div>
                </div>
               </body>
        </>
    )


}
import React from "react";
import { useNavigate } from "react-router-dom";
import background from './assets/one.jpg';

const Prov=()=>{
    const Navigate = useNavigate();
    return(
        <>
             <div className="relative flex justify-center items-center h-screen w-screen">
        <div className="absolute">  
          
            <img src={background} className="h-screen w-screen relative" alt=""/>
        </div>
   

        <div className="absolute w-[25%] gap-10 h-[80%] flex flex-col justify-center items-center border-2 border-slate-300 p-4 backdrop-blur-md  rounded-xl">
             <h1 className="text-5xl font-bold text-white font-mono">LOGIN</h1>

            
            <form action="" className="space-y-6 text-black w-[80%]">
 
                <div className="w-full">
                    <div>
                       
                    </div >
                    <input type="text" placeholder= "USER NAME" className="w-full bg-white p-4 rounded-full"/>
                </div>
                <div className="w-full">
                    <div>
                       
                    </div>
                    <input type="password" placeholder="PASSWORD" className="w-full bg-white p-4 rounded-full"/>
                </div>

              
                      
                
            </form>
            <button className="text-slate-200 p-4 rounded-full font-semibold backdrop-blur-md border-slate-300 border-2 text-2xl px-16 hover:text-3xl font-serif" onClick={()=>{Navigate("/provdet")}}>LOGIN</button>
           
 
         </div>
         
     </div>
        </>
    )
}

export default Prov;

import React from "react";
import  "./login.css";
import { useNavigate } from "react-router-dom";
import background from './assets/login.png';
import logo from './assets/logo.png';


export default function Login(){
  const Navigate = useNavigate();

    return(
        <>
               <body>
                <div className="container min-h-screen">
                    <nav>
                        <img src={logo} alt=""/>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                       
                    </nav>
                </div>
               </body>
        </>
    )


}
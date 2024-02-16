import React from "react";
import { useNavigate } from "react-router-dom";

const Provider=()=>{
    const Navigate = useNavigate();
    return(
        <>
   <body class="bg-gradient-to-br from-yellow-500 to-orange-500 flex justify-center items-center h-screen">
    <div class="bg-white p-12 rounded-lg shadow-md text-center max-w-md w-full">
        <h2 class="text-3xl font-extrabold mb-4">🎉 CONGRATULATIONS! </h2>
        <p class="text-lg mb-6">🎉 Your details have been successfully saved. Please await your food pickup. 🎉</p>
        <p class="text-lg mb-6">💰 Credits will be transferred to your account as per our guidelines! 💰</p>
        <button class="bg-yellow-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-yellow-400" onClick={()=>{Navigate("/login")}}>🙏 Thanks for Your Donation 🙏</button>
    </div>
</body>

        </>
    )
}

export default Provider;

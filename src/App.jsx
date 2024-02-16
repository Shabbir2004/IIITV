import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import Login from './login.jsx';
import Signup from './signup.jsx';
import Organization from './organization.jsx';
import Org from './org.jsx';
import Orgdet from './orgdet.jsx';
import Prov from './prov.jsx';
import Provdet from './provdet.jsx';
import Provider from './provider.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/organization" element={<Organization/>}/>
         <Route path="/org" element={<Org/>}/>
        <Route path="/orgdet" element={<Orgdet/>}/>
        <Route path="/prov" element={<Prov/>}/>
        <Route path="/provdet" element={<Provdet/>}/> 
        <Route path="/provider" element={<Provider/>}/> 

        
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App

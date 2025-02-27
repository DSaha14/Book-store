// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from "./Home/Home";
import Abouts from './components/Abouts/Abouts';

import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './components/courses/Courses';
import Signup from './components/Signup';
import {Toaster} from "react-hot-toast";
import { useAuth } from './context/AuthProvider';
import Contacts from './components/Contacts/contacts-temp';


function App(){

  // eslint-disable-next-line no-unused-vars
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);

  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to = "/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<Abouts />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App



import Navbar from './Components/Navbar';
import React, { useState } from 'react'



import './App.css';
import TextForm from './Components/TextForm';
import AboutUs from './Components/AboutUs';
import Reacthook from './Components/Reacthook';
import UseReducerHook from './Components/UseReducerHook';
import UserReducerTwo from './Components/UserReducerTwo';
import UseEffectHook from './Components/UseEffectHook';
import UseRefHook from './Components/UseRefHook';
import UseLayoutEffectHook from './Components/UseLayoutEffectHook';
import HomeUseContextHook from './Components/HomeUseContextHook';
import LoginUseContextHook from './Components/LoginUseContextHook';
import ProfileUseContextHook from './Components/ProfileUseContextHook';
import LoginContext from './Components/LoginContext'; 

import {  userContext } from './Helper/Context';
import UserContext from './Components/UserContext';
import ReactFormvalidation from './Components/ReactFormvalidation';
import UserInfo from './Components/UserInfo';



export default function App() {
  const [userName,setUserName]=useState('')
 
  return (
    <>
    <UserInfo/>
    </>
    
  )
}


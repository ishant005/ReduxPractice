import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Navbar } from './Navbar';
// import { Shop } from './Shop';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions/index';
function App() {
  
const myState=useSelector((state)=>state.changeTheNumber);
const dispatch=useDispatch();
  return (
    <div className='container'>
            <h1>Deposit/withdraw</h1>
           <div className='quantity'>
<a 
className='quantity_minus' 
title="Decrement"
  onClick={()=>dispatch(decNumber())}
  >
  <span>-</span></a>
<input name="quantity" type="text" className='quantity_input' value={myState} />


<a
 className='quantity_plus' 
 title="Increment"
 onClick={()=>dispatch(incNumber(5))}
 >
 <span>+</span></a>
        
             </div>   
        </div>
  )
}

export default App

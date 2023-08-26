import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Navbar } from './Navbar';
// import { Shop } from './Shop';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber,TOGGLE_AUTH } from './actions/index';
function App() {
  
const myState=useSelector((state)=>state.changeTheNumber);
const myLogin=useSelector((state)=>state.ToggleButton);
const dispatch=useDispatch();
  return (
    <div className='container'>
          <div class="loginbtn">
          <h1>Deposit/withdraw</h1>
            <button onClick={() => dispatch(TOGGLE_AUTH())}>
               {myLogin.isAuthenticated ? 'Logout' : 'Login'}
             </button>
          </div>
            
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

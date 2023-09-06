import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Navbar } from './Navbar';
// import { Shop } from './Shop';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber,TOGGLE_AUTH,ToggleTheme} from './actions/index';

function App() {
  const myState=useSelector((state)=>state.changeTheNumber)
  const myLogin=useSelector((state)=>state.ToggleButton);
  const myTheme=useSelector((state)=>state.themeReducer)
  const dispatch=useDispatch();
  const handleToggleTheme=()=>{
    dispatch(ToggleTheme());
  }
  const loginButtonClassName = `login-button ${myTheme.theme === 'dark' ? 'dark-theme' : 'light-theme'}`;

  return (
    <div className={`container ${myTheme.theme==="dark"?'dark-theme':'light-theme'}`}>
      <div className='loginbtn'>
     <h1>Increment/decrement counter</h1>
     <button onClick={handleToggleTheme}>Toggle Theme</button>
     <button className={loginButtonClassName} onClick={()=>dispatch(TOGGLE_AUTH())}>
      {myLogin.isAuthenticated?'Logout':'Login'}
     </button>
     {/* <button onClick={handleToggleTheme}>
        Toggle Theme: {myTheme === 'dark' ? 'Dark' : 'Light'}
      </button> */}
      
      </div>
      <div className='quantity'>

        <a className='quantity_minus' title="Decrement" onClick={()=>dispatch(decNumber())}><span>-</span></a>
        <input name="quantity type="text className='quantity_input' value={myState}/>
        <a className='quantity_plus' title="Increment"
        onClick={()=>dispatch(incNumber(5))}><span>+</span></a>
        
        </div>      
        </div>
      
  )
}

export default App

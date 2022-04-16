
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import React, {useState} from 'react';


function App() {

 
  function appdata()
  {
    console.log("Function is being called");
  }
  return (
    
    
    <div className='App'>
    <About abc={appdata}></About>
    </div>
    
   
   
  );
}

export default App;

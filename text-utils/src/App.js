
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import React, {useState} from 'react';


function App() {

 
  const[name,setName]=useState("");
  const[tnc,setTnc]=useState("false");

  function getFormData(e)
  {
    e.preventDefault();
    console.log(name,tnc);
  }
  return (
    
    
    <div className='App'>
    <About></About>
    </div>
    
   
   
  );
}

export default App;

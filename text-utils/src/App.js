
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
     <form onSubmit={getFormData}>
    <h3> Handle Form in React</h3>     
    <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
    <select>
     <option>Marvel Fan</option> 
     <option>DC Fan </option>
      </select> <br/>

      <input type="checkbox" onChange={(e)=>setTnc(e.target.value)}/>I accept Terms and conditions <br/>
      <button type="submit" > Submit</button>

      </form> 
    </div>
    
   
   
  );
}

export default App;

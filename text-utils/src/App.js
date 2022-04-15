
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import React, {useState} from 'react';


function App() {

  const [data,setData]=useState(null)
  function getData(val)
  {
    console.log(val.target.value);
    setData(val.target.value);
  }

  const[status,setStatus]=useState(false)
  return (
    
    <>
    <div className='App'>
      
      <input type="text" onChange={getData}></input>
      
      {
        status ? <h1> Anthony</h1>: null
      }
     <div>

       <h3>Hello World</h3>
       <button onClick={()=>setStatus(true)}>Hide</button>
       <button onClick={()=>setStatus(false)}>Show</button> 
     </div>
    </div>
    
   
    </>
  );
}

export default App;

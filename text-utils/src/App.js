
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
  return (
    
    <>
    <div className='App'>
      <h2>{data}</h2>
      <input type="text" onChange={getData}></input>
      

    </div>
    
   
    </>
  );
}

export default App;

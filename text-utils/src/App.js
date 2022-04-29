import React from 'react'
import './App.css'
import Reuse from './Components/Reuse'

export default function App() {
 function parentAlert(data)
 {
   alert(data);
 }

  return (
    <div className='App'>
     <h1>App</h1>
     <Reuse alert={parentAlert}></Reuse>

    </div>
  )
}

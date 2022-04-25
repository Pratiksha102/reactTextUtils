import React from 'react'
import Reuse from './Components/Reuse'
import './App.css'

export default function App() {

  const users=[
    {name:"John",age:"24",email:"john@gmail.com"},
    {name:"Peter",age:"28",email:"Peter@gmail.com"}
    ]
  return (
    <div className='App'>
      <h1>Reuse Component</h1>
    
      {

          users.map((data,i)=>
          <Reuse item={data}/>
          )


      }
      
      
      
      
      
       </div>
  )
}

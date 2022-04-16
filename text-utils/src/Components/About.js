import React,{useState} from 'react'


export default function About() {
    const[loggedIn,setLoggedIn]=useState(false);
    
        return (
            <div>
                <h3> Rendering About Page</h3>
           {loggedIn ? <h1>Welcome Pratiksha </h1> : <h3>Hello Guest</h3>}
           </div>
          )
    
   
 
}

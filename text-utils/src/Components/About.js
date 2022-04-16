import React,{useState} from 'react'


export default function About(props) {
   
    
        return (
           <div>
               <input type='text' placeholder="ENter your name"/>
               <button type='button' onClick={()=>props.abc()}>Submit</button>
           </div>
          )
    
   
 
}

import React from 'react'

export default function Reuse(props) {
   const data="Pratiksha";
  return (
      <>
    <div>Reuse function</div>
    <button onClick={()=>props.alert(data)}>Button</button>
    </>
    
  )
}

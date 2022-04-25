import React from 'react'

export default function Reuse(props) {
    console.log(props);
  return (
    <div >Reuse function {props.item.name}
    <h3>{props.item.age}</h3>
    <h3>{props.item.email}</h3>
    </div>
  )
}

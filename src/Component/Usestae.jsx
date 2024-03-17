import React from 'react'
import { useState } from 'react'
export default function Usestae() {
    const[counter,setCounter]=useState(0)
 const counterbtn=()=>{
    // setCounter(counter+1);
    setCounter(pre=>
        pre+1)
 }
  return (
    <div>
        <h3>Use State</h3>
        <h2>{counter}</h2>
        <button onClick={counterbtn}>Counter</button>
        <hr/>
    </div>
  )
}

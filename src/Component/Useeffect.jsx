import React, { useEffect,useState } from 'react'

export default function Useeffect() {
    const [counter,setCounter]=useState(0)
    const [name,setName]=useState("Aman")
    const Counterclick=()=>{
      setCounter(pre=>pre+1)
    }
    useEffect(()=>{
      console.log("Component Update");
    },[name])
    const updateName=()=>{
      setName("Aman Singh")
    }
  return (
    <div>
        <h3>UseEffect</h3>
        <h2>{counter}</h2>
        <button onClick={Counterclick}>Counter</button>
        <h2>{name}</h2>
        <button onClick={updateName}>Setname</button>
        
    </div>
  )
}

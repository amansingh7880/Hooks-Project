import React, { useRef, useState } from 'react'
export default function Useref() {
    const refElement=useRef("")
    const[name,setName]=useState("Aman")
    console.log(refElement);
    const setname=()=>{
        console.log(refElement);
    }
    function Reset(){
        setName("")
        refElement.current.focus()
    }
    const handelChange=()=>{
        refElement.current.style.color="yellow"
        refElement.current.style.backgroundColor="black"
        refElement.current.value="Aman Singh";
    }
  return (
    <div>
    <h2> Useref</h2>   
    <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <button onClick={Reset}>Reset</button>
    <button onClick={handelChange}>HandelInput</button>
    </div>
  )
}

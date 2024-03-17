import React, { useState,useCallback } from 'react'
import ChildsA from './ChildsA'

export default function UseCallback() {
    const[add,setAdd]=useState(0)
    const Learning=useCallback(()=>{
        console.log('child Component');
    },[])
  return (
    <div>
         learning UseCallback
         <ChildsA Learning={Learning}/>
        <h3>{add}</h3>
        <button onClick={()=>setAdd(add+1)}>Add</button>
    </div>
  )
}

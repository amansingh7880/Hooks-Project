import React, { useState } from 'react'
import { useMemo } from 'react'
export default function UseMemo() {
    const[add,setAdd]=useState(0)
    const[sub,setSub]=useState(100)
    const multiplication=useMemo( function multiply(){
        return add*10;
    },[add]
   )
  return (
    <div>
        <h2>Leraning Usememo</h2>
        {multiplication}
        <button onClick={()=>setAdd(add+1)}>Add</button>
        <span>{add}</span> <br/>
        <button onClick={()=>setSub(sub-1)}>Subtraction</button>
        <span>{sub}</span>        
    </div>
  )
}

import React, { useContext } from 'react'
import { data1 } from '../App'
import { data2 } from '../App'
export default function ChildsC() {
  const name=useContext(data1);
  const age=useContext(data2);
  return (
    <div>
      <h2>My Name is:{name}</h2>
      <h2>My age is:{age}</h2>
    </div>
  )
}

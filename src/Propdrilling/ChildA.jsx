import React from 'react'
import ChildB from './ChildB'

export default function ChildA({name}) {
  return (
    <div>
        <ChildB name={name}/>
    </div>
  )
}

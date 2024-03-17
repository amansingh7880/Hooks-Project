import React from 'react'
import { data } from '../App'
export default function ClassC() {
  return (
    <div>
        <data.Consumer>
            {
                (name)=>{
                    return(
                        <>
                        <h2>Propsdrilling Avoid</h2>
                        <h3>My Name Is :{name}</h3>
                        </>
                    )
                }
            }
        </data.Consumer>
    </div>
  )
}

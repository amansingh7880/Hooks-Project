import React, { Component } from 'react'

export class Propsclass extends Component {
   constructor(props){
    super()
        this.props=props

        console.log(props);
        
   }
  render() {
    return (
      <div>
        <h2>Props classcomponent</h2>
        <h3>{this.props.name}{this.props.age}</h3>
      </div>
    )
  }
}

export default Propsclass
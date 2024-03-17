import React, { Component } from 'react'

export class State extends Component {
    constructor(props){
        super(props)
        this.props=props;
        this.state={
            name:"Aman Singh",
            age:25,
        }
    }
    handelEdit(){
        console.log(this.state);
        this.setState({name:"Ram Gopal",age:24})
    }
  render() {
    return (
      <div>
       <h1>State : {this.state.name} {this.state.age}</h1> 
        <button onClick={()=>this.handelEdit()}>Click Me</button>
    </div>
    )
  }
}

export default State
import React, { Component } from 'react';
import './App.css';
import Userinput from './UserInput/UserInput'
import Useroutput from './UserOutput/UserOutput'
class App extends Component {
  state = {
    username:[
      {name: "Ashwini"},
      {name: "Naval"},
      {name: "Priya"}
    ]
  }
  usernameChangedHandler = (event) =>{
      this.setState( {
        username:[
          {name: event.target.value},
          {name: "Ashwini"},
          {name: "Naval"}
          
         ] 
      })
  }
  render() {
    const style = {
      backgroundColor: 'grey'
    }
    return (
      <div className="App">
          <h3>Input-Output Assignment</h3>
          
          <Userinput changed={this.usernameChangedHandler} name={this.state.username[0].name} style={style}/>
          <div className="card">
          <Useroutput name={this.state.username[0].name}/>
          </div>
          <div className="card">
          <Useroutput name={this.state.username[1].name}/>
          </div>
          <div className="card">
          <Useroutput name={this.state.username[2].name}/>
          </div>
          
      </div>
    );
  }
}

export default App;

import './App.css';
import React, { Component, useState } from 'react'
import Navbar from './Components/Navbar/Navbar.js'
import Jumbotron from './Components/Jumbotron/Jumbotron.js'
import Form from './Components/Form/Form.js'



class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //
  //   };
  // }

  render() {

    return (

      <>
      <Navbar/>
      < Jumbotron />
      <Form />
         

      </>
    )
  }

}
export default App;

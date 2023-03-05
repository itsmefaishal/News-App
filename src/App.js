import React, {Component} from "react";
import './App.css'
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render(){
   return(
    <div >
      <Navbar/>
      <News/>
    </div>
   );
  }
}

export default App;


// 29bb3b8c64bb4321ad03ca73a2b7c795
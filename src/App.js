import React from "react"
import './App.css';
import Content from "./Component/Content";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import {  BrowserRouter as Router, Route } from "react-router-dom";
import Shop from "./Component/Shop";
import Home from "./Component/Home"
import Journal from "./Component/Journal"

class App extends React.Component {

  render(){
    return(
      <div>
        <Header></Header>
        
        <Router>
          <Nav/>
          <Route path="/journal" component={Journal}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/home" component={Home}/>
          <Route path= "/about" component={Content}/>
        </Router>

        
      </div>
    )
  }


}

export default App;

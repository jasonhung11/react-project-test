import React from "react"
import './App.css';
import Content from "./Component/Content";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import {  BrowserRouter as Router, Route } from "react-router-dom";
import Shop from "./Component/Shop";
import Home from "./Component/Home"
import Journal from "./Component/Journal"
import Menu from "./Component/Menu";
import Sidebar from "./Component/Sidebar";
import Main from "./Component/Main"


class App extends React.Component {

  render(){
    return(
      <div className="app-div">        
        <Router>
          <Nav/>
          <Menu></Menu>
          <Route path="/journal" component={Journal}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/home" component={Main}/>
          <Route path= "/about" component={Content}/>
        </Router>
        
        
      </div>
    )
  }


}

export default App;

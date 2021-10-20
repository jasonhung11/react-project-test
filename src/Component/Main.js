import react from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "../Style/Main.css"
import Home from "./Home";

function Main(){
    return(
        <div className="main-div">
            <Sidebar className="sidebar"></Sidebar>
            <Home></Home>
        </div>
    )
}

export default Main;
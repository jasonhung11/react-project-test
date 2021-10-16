import react from "react";
import { Component } from "react";
import {  Link } from "react-router-dom";
import "../Style/Nav.css"


function Nav(){
    return(
        <div className="big-div">
            <nav>
                <ul>
                    <li className="nav">
                        <Link to="/home" className="link"> Home </Link>
                    </li>

                    <li className="nav">
                        <Link to="/shop" className="link"> Shop </Link>
                    </li>

                    <li className="nav">
                        <Link to="/about" className="link"> About </Link>
                    </li>

                    <li className="nav">
                        <Link to="/journal" className="link"> Journal </Link>
                    </li>
                </ul>
            </nav>

        </div>

    )
}



export default Nav

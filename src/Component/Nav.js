import react from "react";
import { Component } from "react";
import {  Link } from "react-router-dom";
import "../Style/Nav.css"


function Nav(){
    return(
        <div className="big-div nav-div">
            <nav className="">
                <ul>
                    <div className="inline-div left-align-div">

                        <li className="nav bold-text ">
                            <Link to="/home" className="link"> Home </Link>
                        </li>
                    

                        <li className="nav bold-text">
                            <Link to="/shop" className="link"> Shop </Link>
                        </li>

                        <li className="nav bold-text">
                            <Link to="/about" className="link"> About </Link>
                        </li>

                        <li className="nav bold-text" >
                            <Link to="/journal" className="link"> Journal </Link>
                        </li>

                        <li className="nav bold-text" >
                            <Link to="/journal" className="link"> Journal </Link>
                        </li>

                        <li className="nav bold-text" >
                            <Link to="/journal" className="link"> Journal </Link>
                        </li>

                    </div>
                    

                    <div className="inline-div flex-end-div">
                        <button className="nav-button-div bold-text" id="pink-button">
                            Website
                                                        
                            <button className="nav-button-div bold-text" id="nav-small-button">
                                New
                            </button>
                        </button>

                        <button className="nav-button-div nav-button bold-text" id="paid-button">
                            Paid Course
                        </button>
                        
                        <button className="nav-button-div nav-button bold-text" id="login-button">
                            Log in
                        </button>
                    </div>

                </ul>
            </nav>

        </div>

    )
}



export default Nav

import React, { Component } from "react";
import herro from "../images/herro.jpeg"
import "../Style/Home.css"
import Sidebar from "./Sidebar";

function Home(){
        return (

            <div className="big-div">
            <div>   
                <img className="herro" src={herro}></img>
            </div>

            <div className="text-center-div">
                <p> #CCCCCc Se / ect代表一種簡單化的生活方式，無邊界的中性灰色。</p>
                <p> 我們提供純正直接的樣式，無需額外的思考。</p>
                <button className="story-button" > Our Story</button>
            </div>

            <div className="grid discription-div">
                    
                    <div className="div-rotation" >
                        <p>New</p>
                        <h4>iPhone 13 Pro. <br/> Oh. So. Pro.</h4>
                        <p>From $999.0 or $41.52/mo. for 24 mo. <br/> before trade-in*</p>
                        <img className="product-img" src="https://cdn2.techbang.com/system/images/609255/original/f4ab731520fadf88f74ada276822fc7c.jpg?1631647734"/> 
                    </div>

                    <div className="div-rotation">
                        <img className="product-img"/> 
                    </div>

                    <div className="div-rotation">
                        <img className="product-img"/> 
                    </div>

                    <div className="div-rotation">
                        <img className="product-img"/> 
                    </div>
            </div>

            <div className="grid big-div">

                <div className="help-div">
                    <h3 className="h3-div">Shop one on one with a <br/> 
                    Specialist. Online or in store</h3>

                    <img src={herro} className="small-herro" />

                </div>

                <div className="help-div small-grid" >
                    <div className="small-div">
                        <p> 
                        Specialist. Online or in store
                        </p>
                    </div>

                    <div className="small-div">
                        <p> Specialist. Online or in store </p>
                    </div>

                </div>
            </div>
        </div>


        

        )
    }



export default Home
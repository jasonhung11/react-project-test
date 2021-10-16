import React, { Component } from "react";
import herro from "../images/herro.jpeg"
import "../Style/Home.css"

class Home extends Component{
    render(){
        return (
        <div className="big-div">
            <div>   
                <img className="herro" src={herro}></img>
            </div>

            <div>
                <p> #CCCCCc Se / ect代表一種簡單化的生活方式，無邊界的中性灰色。</p>
                <p> 我們提供純正直接的樣式，無需額外的思考。</p>
                <button className="story-button" > Our Story</button>



            </div>
            <div>
                
            </div>

            <div className="grid">
                    
                    <div className="div-rotation" >
                        <img className="product-img"/> 
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
        </div>

        )
    }
}


export default Home
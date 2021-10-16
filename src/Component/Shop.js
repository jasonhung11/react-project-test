import React, { Component } from "react";
import { useState, useEffect } from "react";
import jimmy from "../images/jimmy.jpeg"
import herro from "../images/herro.jpeg"
import lowry from "../images/lowry.jpg"
import mourning from "../images/mourning.jpeg"
import axios from "axios"


function Shop (){

    const [data, setData] = useState([])

    async function apiGet(){
        let repsonse = await axios("https://www.balldontlie.io/api/v1/teams")
        console.log(repsonse.data)
        setData(repsonse.data.data)
    };

    useEffect(() => {
        apiGet()
    }, []);
    
    return (
    <div>
        <ui>
            {data.map((item) =>(
                <li key={item.id}>{item.city}</li>
            ))}
        </ui>
    </div>
 )
    
}



export default Shop
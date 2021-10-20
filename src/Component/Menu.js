import react from "react";
import "../Style/Menu.css"

function Menu(){
    return(
        <div className="menu-div">
            <ul>
                <li className="menu-li">
                    <button className="bold-text menu-button">HTML</button>
                </li>
                
                <li className="menu-li">
                    <button className="bold-text menu-button">CSS</button>
                </li>
                <li className="menu-li">
                    <button className="bold-text menu-button">JAVASCRIPT</button>
                </li>
                <li className="menu-li">
                    <button className="bold-text menu-button">SQL</button>
                </li>
                <li className="menu-li">
                    <button className="bold-text menu-button">PYTHON</button>
                </li>
                <li className="menu-li">
                    <button className="bold-text menu-button">PHP</button>
                </li>
                <li className="menu-li">
                    <button className="bold-text menu-button">BOOTSTRAP</button>
                </li>

                <li className="menu-li">
                    <button className="bold-text menu-button">HOW TO</button>
                </li>
                <li className="menu-li">
                    <button className="bold-text menu-button">W3.CSS</button>
                </li>
                <li className="menu-li">
                    <button className="bold-text menu-button">JAVA</button>
                </li>
                <li className="menu-li">
                    <button className="bold-text menu-button">C++</button>
                </li>

                <li className="menu-li">
                    <button className="bold-text menu-button">C#</button>
                </li>

                <li className="menu-li">
                    <button className="bold-text menu-button">R</button>
                </li>
               


            </ul>

            
        </div>
    )
}

export default Menu;
import React from "react"
import "./Body1.css"
import Main from "./Main";
import { 
    BrowserRouter,
    Switch,
    Route,
    Link} from "react-router-dom";

const Body1=()=>{

    return(
        <div>
            <Main/>
            <section class="second-section">
                
                    <img src="https://www.crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza.jpg" alt="bir pizza çeşidi"/>
                    <img src="https://www.crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza.jpg" alt="bir pizza çeşidi"/>
                    <img src="https://www.crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza.jpg" alt="bir pizza çeşidi"/>
                    <img src="https://www.crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza.jpg" alt="bir pizza çeşidi"/>
                    <img src="https://www.crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza.jpg" alt="bir pizza çeşidi"/>
                    <img src="https://www.crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza.jpg" alt="bir pizza çeşidi"/>
               
            </section>
        </div>
    )
}

export default Body1;
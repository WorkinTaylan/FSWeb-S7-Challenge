import React from "react"
import "../body1.css"
import { 
    BrowserRouter,
    Switch,
    Route,
    Link} from "react-router-dom";

const Body1=()=>{




    return(
        <div>
            
            <section class="first-section">
                <h2>Your favourite food, delivered while coding</h2>
                <button>
                    <Link to="/pizza">Pizza?</Link>
                </button>
            </section>

            <section class="second-section">
                <h4>Food Delivery in Ankara City</h4>
                <figure>
                    <img src="https://www.crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza.jpg" alt="bir pizza çeşidi"></img>
                    <img src="https://www.crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza.jpg" alt="bir pizza çeşidi"/>
                    <img src="https://www.crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza.jpg" alt="bir pizza çeşidi"/>
                    <div>
                       
                    </div>
                    <img src="https://www.crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza.jpg" alt="bir pizza çeşidi"/>
                    <img src="https://www.crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza.jpg" alt="bir pizza çeşidi"/>
                    <img src="https://www.crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza.jpg" alt="bir pizza çeşidi"/>
                </figure> 
            </section>
        </div>
    )
}

export default Body1;
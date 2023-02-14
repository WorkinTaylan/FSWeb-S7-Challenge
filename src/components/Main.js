import React, {useState, useEffect} from "react";
import "./Main.css"
import { 
    BrowserRouter,
    Switch,
    Route,
    Link} from "react-router-dom";


export default function Main(){
    return(
        <div>
            <section class="first-section">
                <h2>En sevdiğin yemekler kodlarken yanında</h2>
                <button>
                    <Link to="/pizza">Pizza?</Link>
                </button>
            </section>
        </div>
        
    )
}


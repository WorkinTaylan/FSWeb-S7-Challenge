import React from "react";
import "./Main.css"
import {Link} from "react-router-dom";


export default function Main(){
    return(
        
            <section className="first-section">
                <h2>En sevdiğin yemekler kodlarken yanında</h2>
                <button>
                    <Link to="/pizza">Pizza?</Link>
                </button>
            </section>
    
        
    )
}


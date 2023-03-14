import React from "react";
import "./Home.css"
import Main from "./Main";
import Dummy from "./Dummy";



const Home=()=>{

    return (
        <div>
            <Main/>
            <section className="second-section">
              
                {Dummy.map(item=>(
                   <p>
                     <img src={item.img} alt={item.img}/>
                     <figcaption>{item.title}<br/>
                     {item.hours}</figcaption>
                     <a href={item.menu} style={{textDecoration:"none", color:"crimson",borderStyle:"solid",borderWidth:"3px", padding:"5px"}}>NELER VAR NELER</a>
                        
                   </p>
                    ))}
            
            </section>
        </div>
    )
}

export default Home;
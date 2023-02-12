import React from "react";
import "./App.css";

import { 
BrowserRouter,
Switch,
Route,
Link} from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
    <header>
      <h1>Teknolojik Yemekler</h1>
  
      <nav className="order-pizza">
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/pizza">Form</Link>
        </a>
      </nav>
    </header>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route path="/pizza" component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;

import React from "react";
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
      <h1>Teknolojik Yemekler</h1>
      <p>Burdaki kodu silip kendi headerınızı ekleyebilirsiniz</p>
      <nav className="order-pizza">
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/pizza">Form</Link>
        </a>
      </nav>
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

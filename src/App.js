import "./App.css";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Phones } from "./pages/Phones";
import {Product} from "./pages/Product"
import { Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <>
    <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/phones" component={Phones}></Route>
        <Route exact path="/product:slug" component={Product}></Route>
        <Route exact component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;

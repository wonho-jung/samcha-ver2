import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Feature from "./components/Feature/Feature";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menu/Menus";
import Nav from "./components/Nav/Nav";
import { productData, productDataTwo } from "./components/Products/data";
import Products from "./components/Products/Products";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Hero isOpen={isOpen} toggle={toggle} />
            <Products
              heading="What are the most popular meals?"
              data={productData}
            />
            <Feature />
            <Products
              heading="Sweet Treats and K-Drink"
              data={productDataTwo}
            />
          </Route>
          <Route exact path="/menus">
            <Menus isOpen={isOpen} toggle={toggle} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

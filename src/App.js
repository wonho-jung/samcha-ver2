import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dinner from "./components/Dinner/Dinner";
import Drink from "./components/Drink/Drink";

import Feature from "./components/Feature/Feature";
import Hero from "./components/Hero/Hero";
import Lunch from "./components/Lunch/Lunch";
import Menus from "./components/Menu/Menus";
import {
  Appetizer,
  Side,
  Main,
  Special,
  Drinks,
} from "./components/MenusProduct/menudata";
import { productData, productDataTwo } from "./components/Products/data";
import Products from "./components/Products/Products";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="app">
      <Router>
        <Route exact path="/">
          <div>
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
          </div>
        </Route>
        <Route path="/menus">
          <div>
            <Menus isOpen={isOpen} toggle={toggle} />
          </div>
        </Route>

        <Route path="/menus/lunch">
          <Lunch Main={Main} Side={Side} Appetizer={Appetizer} />
        </Route>

        <Route path="/menus/dinner">
          <Dinner
            Main={Main}
            Side={Side}
            Appetizer={Appetizer}
            Special={Special}
          />
        </Route>
        <Route path="/menus/drink">
          <Drink Drinks={Drinks} />
        </Route>
      </Router>
    </div>
  );
}

export default App;

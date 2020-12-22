import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Feature from "./components/Feature/Feature";
import Hero from "./components/Hero/Hero";
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
import Footer from "./components/Footer/Footer.js";
import About from "./components/About/About";
import { reviews } from "./components/About/reviewData";
import ScrollToTop from "./ScrollToTop";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="app">
      <Router>
        <Route exact path="/">
          <ScrollToTop />
          <Hero isOpen={isOpen} toggle={toggle} />
          <Products
            heading="What are the most popular meals?"
            data={productData}
          />
          <Feature />
          <Products heading="Sweet Treats and K-Drink" data={productDataTwo} />
        </Route>
        <Route path="/menus">
          <ScrollToTop />

          <Menus
            isOpen={isOpen}
            toggle={toggle}
            Main={Main}
            Side={Side}
            Appetizer={Appetizer}
            Special={Special}
            Drinks={Drinks}
          />
        </Route>

        <Route path="/about">
          <ScrollToTop />

          <About isOpen={isOpen} toggle={toggle} reviews={reviews} />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

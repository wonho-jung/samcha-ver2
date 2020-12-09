import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Feature from "./components/Feature/Feature";
import Hero from "./components/Hero/Hero";
import { productData, productDataTwo } from "./components/Products/data";
import Products from "./components/Products/Products";

function App() {
  return (
    <div>
      <Router>
        <Hero />
        <Products
          heading="What are the most popular meals?"
          data={productData}
        />
        <Feature />
        <Products heading="Sweet Treats and K-Drink" data={productDataTwo} />
      </Router>
    </div>
  );
}

export default App;

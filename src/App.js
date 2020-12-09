import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div>
      <Router>
        <Hero />
      </Router>
    </div>
  );
}

export default App;

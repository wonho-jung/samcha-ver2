import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Menus from "./components/Menus";
import Pictures from "./components/Pictures";
import Teams from "./components/Teams";
import Contacts from "./components/Contacts";
function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Route path="/">
          <Home />
          <About />
          <Menus />
          <Pictures />
          <Teams />
          <Contacts />
        </Route>
      </Router>
    </div>
  );
}

export default App;

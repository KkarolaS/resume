import Home from "./components/Home/Home";
import { Route, Router } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.pageContainer}>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Router>
    </div>
  );
};

export default App;

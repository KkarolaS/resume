import Home from "./components/Home/Home";
import { HashRouter, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.pageContainer}>
      <HashRouter>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </HashRouter>
    </div>
  );
};

export default App;

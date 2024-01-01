import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.pageContainer}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

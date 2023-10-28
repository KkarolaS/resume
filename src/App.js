import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import classes from "./App.module.css";
import pageSound from "./assets/sounds/ocean.mp3";

const App = () => {
  return (
    <div className={classes.pageContainer}>
      <audio
        src={pageSound}
        type="audio/mpeg"
        autoplay
        loop
        preload="metadata"
      ></audio>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

import classes from "./App.module.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className={classes.app}>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;

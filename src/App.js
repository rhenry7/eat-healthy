import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Value from "./components/Value";
import Scale from "./components/Scale";
import Close from "./components/Close";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <Grid />
      <Value />
      <Scale />
      <Close />
    </div>
  );
}

export default App;

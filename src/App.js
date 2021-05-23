import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Value from "./components/Value";
import Scale from "./components/Scale";
import Close from "./components/Close";
import DataFetching from "./components/DataFetching";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      {/* <DataFetching /> */}
      <Grid />
      <Value />
      <Scale />
      <Close />

    </div>
  );
}

export default App;

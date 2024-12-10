import "./App.css";
import Discount from "./components/Discount";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <h1>Counter</h1>
          {/*Call the Discount Component and set the states.[PhyoMin]*/}
          <Discount />
        </div>
      </header>
    </div>
  );
}

export default App;

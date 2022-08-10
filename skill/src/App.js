import './App.css';
import MultiSlider from "./components/multiSlider/multiSlider";

function App() {
  return (
    <div className="App">
      <MultiSlider
          min={1}
          max={10000}
          onChange={({ min, max }) => console.log(`Minimo = ${min}, Maximo = ${max}`)}
          disabled={false}
          symbol={"€"}
      />
    </div>
  );
}

export default App;

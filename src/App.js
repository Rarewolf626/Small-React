import './App.css';
import Pizza from './Components/Pizza/Pizza';
import pizzaData from './data';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
            pizzaData.map((pizza, index) =>  
              <Pizza key={index} pizza={pizza} ></Pizza>
            )
        }
      </header>
    </div>
  );
}

export default App;

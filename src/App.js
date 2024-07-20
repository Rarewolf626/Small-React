import './App.css';
import Pizza from './Components/Pizza/Pizza';
import pizzaData from './data';
function App() {
  return (
    <div className="App">
        {
            pizzaData.map((pizza, index) =>  
              <Pizza key={index} pizza={pizza} ></Pizza>
            )
        }
    </div>
  );
}

export default App;

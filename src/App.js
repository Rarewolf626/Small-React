import './App.css';
import Pizza from './Components/Pizza/Pizza';
import Header from './Components/Header/header';
import pizzaData from './data';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="pizza-container">
          {
              pizzaData.map((pizza, index) =>  
                <Pizza key={index} pizza={pizza} ></Pizza>
              )
          }
      </div>
    </div>
  );
}

export default App;

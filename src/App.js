import './App.css';
import LogoText from "./Logo.js"
import WeatherContainer from './WeatherContainer';

function App() {
  return (
    <div className="divFrame">
      <div className="App rounded-lg">
        <header>
          <LogoText/>
          <WeatherContainer/>
        </header>
      </div>  
    </div>
  );
}


export default App;

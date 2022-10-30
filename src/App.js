import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App </h1>

        <Weather defaultCity="Kyiv" />
      </header>
      <footer>
        Open-source code by{' '}
        <a
          href="https://github.com/Dashasoham/react--weather-app"
          target="blank"
        >
          Daria Korniienko{' '}
        </a>
      </footer>
    </div>
  );
}

export default App;

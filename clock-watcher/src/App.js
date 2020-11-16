import logo from './logo.svg';
import './App.css';
import ClockWatcher from './components/clock-watcher.js'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

<ClockWatcher utc={'en-US'} id={'1'} />
<ClockWatcher utc={'en-US'} id={'2'} />
<ClockWatcher utc={'en-US'} id={'3'} />
    </div>
  );
}

export default App;

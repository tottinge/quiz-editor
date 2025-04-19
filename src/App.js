import './App.css';
import {Question} from "./Question";
import {Quiz} from "./Quiz";

function App() {
  return (
  <>
    <Quiz />
    <hr />
    <Question/>
    <div className="App">

      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
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
      </header>
    </div>
  </>
  );
}

export default App;

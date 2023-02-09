import logo from './logo.svg';
import './App.css';

import './components/hello';
import Hello from './components/hello';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/counter';
import Click from './components/FunctionClick';
import ClassClick from './components/classClick';
import Event from './components/EventBind';


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        {/* <Hello name="john Doe" heroName="diana">
          <p>hey This is the child</p>
        </Hello>
        <Welcome name="hero" heroName="ironMan"></Welcome> */}
        {/* <Message>

        </Message> */}

        {/* <Counter></Counter> */}
        {/* <Click></Click> */}
        {/* <ClassClick></ClassClick> */}
        <Event></Event>
      </header>
    </div>
  );
}

export default App;

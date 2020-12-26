import './App.css';
import Headers from './Headers/Headers';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Headers/>
          <Login/>
        </div>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Xlogin from './xlogin';
import Xstopwatch from './xstopwatch';
import Xweather from './Xweather/xweather';
import XSpellCheck from './xspellcheck';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/stopwatch">Stopwatch</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <Link to="/spellcheck">Spell Check</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login" component={Xlogin} />
          <Route path="/stopwatch" component={Xstopwatch} />
          <Route path="/weather" component={Xweather} />
          <Route path="/spellcheck" component={XSpellCheck} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Buttons from './components/Buttons';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Buttons} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

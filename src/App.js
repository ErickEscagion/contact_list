import './App.css';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './components/Main';
import Register from './components/Register';
import Change from './components/Change';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/register" exact component={Register} />
          <Route path="/change" exact component={Change} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

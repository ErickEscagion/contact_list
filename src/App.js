import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './components/Main';
import Register from './components/Register';
import Change from './components/Change';
import Test from './components/Test'
import React from 'react'
import { connect } from 'react-redux';

function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={(props) => <Main {...props} />} />
          <Route path="/register" exact render={(props) => <Register {...props} />} />
          <Route path="/change" exact render={(props) => <Change {...props} />} />
          <Route path="/test" exact render={(props) => <Test {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    dataRedux: state.data,
  }
}

export default connect(mapStateToProps)(App);
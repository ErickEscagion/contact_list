import './App.css';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './components/Main';
import Register from './components/Register';
import Change from './components/Change';
import React from 'react'
import { connect } from 'react-redux';

function App(props) {
  //console.log(props)
  //var data = props.dataRedux;

  /*
  const toggleSelected = (id) =>{
    var aux = {...data}
    var length = Object.keys(aux).length
    for(let i = 0; i < length; i++){
        if(aux[i].id === (id)){
            aux[i].selected = !aux[i].selected
        }
    }
    if(!Array.isArray(aux)){
        aux = Object.values(aux)
    }
    //setData(aux);
  }

  const changeName = (id, name) =>{
    var aux = {...data}
    var length = Object.keys(aux).length
    for(let i = 0; i < length; i++){
        if(aux[i].id === (id)){
            aux[i].name = name;
        }
    }
    if(!Array.isArray(aux)){
        aux = Object.values(aux)
    }
    //setData(aux);
  }

  const changeTelephone = (id, telephone) =>{
    var aux = {...data}
    var length = Object.keys(aux).length
    for(let i = 0; i < length; i++){
        if(aux[i].id === (id)){
            aux[i].telephone = telephone;
        }
    }
    if(!Array.isArray(aux)){
        aux = Object.values(aux)
    }
    //setData(aux);
  }

  var selectedLine = {}

  for(let i = 0; i < Object.keys(data).length; i++){
    if(data[i].selected === true){
        selectedLine = data[i];
    }
  }
*/
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={(props) => <Main {...props} />} />
          <Route path="/register" exact render={(props) => <Register {...props} />} />
          <Route path="/change" exact render={(props) => <Change {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

function mapStateToProps(state){
  return {
      dataRedux: state.data,
  }
}

export default connect(mapStateToProps)(App);
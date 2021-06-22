import './App.css';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './components/Main';
import Register from './components/Register';
import Change from './components/Change';
import React, {useState} from 'react'

function App() {

  const [data, setData] = useState([
    { id: 1, name:'Erick', telephone:'(15)99818-1242', sex:'M', selected:false},
    { id: 2, name:'Laura', telephone:'(15)12345-6789', sex:'F', selected:false}
  ]);

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
    setData(aux);
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
    setData(aux);
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
    setData(aux);
  }

  var selectedLine = {}

  for(let i = 0; i < Object.keys(data).length; i++){
    if(data[i].selected === true){
        selectedLine = data[i];
    }
  }
  console.log(selectedLine);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={(props) => <Main {...props} data={data} setData={setData} toggleSelected={toggleSelected}/>} />
          <Route path="/register" exact component={Register} />
          <Route path="/change" exact render={(props) => <Change {...props} selectedLine={selectedLine} changeName={changeName} changeTelephone={changeTelephone}/>} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;

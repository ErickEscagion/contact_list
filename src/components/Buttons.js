import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './Register';
export default class Buttons extends Component {

    register() {
        console.log("Registrar");
        return (
            <Router>
                <div className="App">
                    <Buttons></Buttons>
                    <Switch>
                        <Route path="/register" exact component={Register} />
                    </Switch>
                </div>
            </Router>
        );
    }

    change() {
        console.log("Alterar");
    }

    delete() {
        console.log("Excluir");
    }
    render() {
        return (
            <div className="buttons">
                <input type="button" value="Cadastrar" onClick={this.register}></input>
                <input type="button" value="Alterar" onClick={this.change}></input>
                <input type="button" value="Excluir" onClick={this.delete}></input>
            </div> 
        )
    }
}
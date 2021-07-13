import React, { useState } from 'react'
import{Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import { changeContact } from '../store/actions/crud';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Change = (...props) =>{

    var selectedLine = 0;
    for(let i = 0; i < props[0].dataRedux.length; i++){
        if(props[0].dataRedux[i].selected === true){
            selectedLine = i;
        }
    }

    const [redirectToExit, setRedirectToExit] = useState(false);
    const [name, setName] = useState(props[0].dataRedux[selectedLine].name);
    const [telephone, setTelephone] = useState(props[0].dataRedux[selectedLine].telephone);
    const [exitMSG, setExitMSG] = React.useState(false);

    
    const exit = () =>{
        snackBarErrorExit();
        setTimeout(function(){ 
            setRedirectToExit(true);
            if(redirectToExit === true){
                return <Redirect to='/'/>;
            }
        }, 3000);
    }

    const change = () =>{
        var contactBackup = props[0].dataRedux[selectedLine]
        var contact = [{
            id: contactBackup.id,
            name: document.querySelector("#name").value,
            telephone: document.querySelector("#telephone").value,
            sex: contactBackup.sex,
            selected: false,
        }]
        
        props[0].CHANGE(contact)
        setTimeout(function(){ 
            setRedirectToExit(true);
            if(redirectToExit === true){
                return <Redirect to='/'/>;
            }
        }, 200);
    }

    function changeName(e){
        setName(e.target.value)
    }

    function changeTelephone(e){
        setTelephone(e.target.value)
    }

    const renderRedirect = () =>{
        if(redirectToExit === true){
            return <Redirect to='/'/>;
        }
        return null;
    }

    const handleClose = () => {
        setExitMSG(false);
    };

    const snackBarErrorExit = () => {
        setExitMSG(true);
    };

    return (
        <>
        {renderRedirect()}
        <div id="register" className="registerCSS"> 
            <form method="post" action=""> 
                <h1>Alterar</h1> 
                <label for="name">Nome:</label>
                <br/>
                <input id ="name" required="required" type="text" placeholder="Nome" value={name} onChange={changeName}/>
                <br/>
                <label for="telephone">Telefone:</label>    
                <br/>         
                <input id = "telephone" required="required" type="text" placeholder="(xx)xxxxx-xxxx" value={telephone} onChange={changeTelephone}/> 
                <br/>
                <input type="button" value="Salvar" onClick={change}></input>
                <input type="button" value="Sair" onClick={exit}></input>
            </form>
        </div>

        <Snackbar open={exitMSG} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    As alterações não serão Salvas!
                </Alert>
            </Snackbar>

        </>
    )
} 

function mapStateToProps(state){
    return {
        dataRedux: state.data,
    }
  }

function mapDispatchToProps (dispatch){
    return {
        CHANGE(contact) {
            const action = changeContact(contact)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Change);
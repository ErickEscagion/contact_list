import React, {useState} from 'react'
import{Redirect} from 'react-router-dom'
import Table from './Table/Table';
import { connect } from 'react-redux';
import { deleteContact } from '../store/actions/crud';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Main = (props) =>{

    var data = props.dataRedux;

    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToChange, setRedirectToChange] = useState(false);
    const [successDelete, setSuccessDelete] = React.useState(false);
    const [errorDelete, setErrorDelete] = React.useState(false);
    const [errorRegister, setErrorRegister] = React.useState(false);
    const [errorChangeOne, setErrorChangeOne] = React.useState(false);
    const [errorChangeTwo, setErrorChangeTwo] = React.useState(false);

    const register = () =>{
        var aux = 0;
        for(let i = 0; i < data.length; i++){
            if(data[i].selected === true){
                aux++;
            }
        }
        if(aux === 0){
            setRedirectToRegister(true);
        }else{
            snackBarErrorRegister();
        }
    }

    const change = () =>{
        var aux = 0;
        for(let i = 0; i < data.length; i++){
            if(data[i].selected === true){
                aux++;
            }
        }
        if(aux === 0){
            snackBarErrorChangeOne();
        }else if(aux === 1){
            setRedirectToChange(true);
        }else{
            snackBarErrorChangeTwo();
        }
    }

    const del = (oEvent) =>{
        var aux = 0;
        for(let i = 0; i < data.length; i++){
            if(data[i].selected === true){
                aux++;
            }
        }
        if(aux === 0){
            snackBarErrorDelete();
        }else{
            for(let i = 0; i < data.length; i++){
                if(data[i].selected === true){
                    props.DELETE(data[i].id)
                }
            }
            snackBarSucessDelete();
        }
    }

    const renderRedirect = () =>{
        if(redirectToRegister === true){
            return <Redirect to='/register'/>;
        }else if(redirectToChange === true){
            return <Redirect to='/change'/>;
        }
        return null;
    }

    const handleClose = () => {
        setSuccessDelete(false);
        setErrorDelete(false);
        setErrorRegister(false);
        setErrorChangeOne(false);
        setErrorChangeTwo(false);
    };

    const snackBarSucessDelete = () => {
        setSuccessDelete(true);
    };

    const snackBarErrorDelete = () => {
        setErrorDelete(true);
    };

    const snackBarErrorRegister = () => {
        setErrorRegister(true);
    };

    const snackBarErrorChangeOne = () => {
        setErrorChangeOne(true);
    };

    const snackBarErrorChangeTwo = () => {
        setErrorChangeTwo(true);
    };


    return (
        <>
        {renderRedirect()}
        <div className="main">
            <input type="button" value="Cadastrar" onClick={register}></input>
            <input type="button" value="Alterar" onClick={change}></input>
            <input type="button" value="Excluir" onClick={del}></input>
            <Table {...props}/>
            
            <Snackbar open={successDelete} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Contato(s) Deletado(s)!
                </Alert>
            </Snackbar>

            <Snackbar open={errorDelete} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Selecione um ou mais Contatos!
                </Alert>
            </Snackbar>

            <Snackbar open={errorRegister} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Não Selecione nenhum contato!
                </Alert>
            </Snackbar>

            <Snackbar open={errorChangeOne} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Selecione um Contato!
                </Alert>
            </Snackbar>

            <Snackbar open={errorChangeTwo} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Selecione somente um Contato!
                </Alert>
            </Snackbar>

        </div>
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
        DELETE(listIndicesExclude) {
            const action = deleteContact(listIndicesExclude)
            dispatch(action)
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);
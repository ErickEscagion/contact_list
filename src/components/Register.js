import React, {useState} from 'react'
import { connect } from 'react-redux';
import{ Redirect } from 'react-router-dom'
import { saveContact } from '../store/actions/crud'


import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Register = ( ...props) =>{
    var data = props[0].dataRedux;

    const [redirectToExit, setRedirectToExit] = useState(false);
    const [alertInputName, setAlertInputName] = React.useState(false);
    const [alertInputTelephone, setAlertInputTelephone] = React.useState(false);
    const [alertInputSex, setAlertInputSex] = React.useState(false);
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

    const isValidPhone = (phone) => {
        const brazilianPhoneRegex = /^\(\d{2}\)\d{4,5}-\d{4}$/gi;
        return brazilianPhoneRegex.test(phone);
    };

    const save = () =>{
        var inputName = document.querySelector("#name").value;
        var valist = []
        if(inputName.length < 3){
            valist.push(1)
        }
        var inputTelephone = document.querySelector("#telephone").value;
        if(!isValidPhone(inputTelephone)){
            valist.push(2)
        }
        if(!document.querySelector('input[name="sex"]:checked')){
            valist.push(3)
        }
        //melhorar logica para exibição das mensagem em tempo melhor
        if( valist.length !== 0){
            for(let i =0; i < valist.length; i++){
                if(valist[i] === 1){
                    snackBarInputName();
                }else if( valist[i] === 2){
                    setTimeout(function(){ 
                        snackBarInputTelephone();
                    }, 4000);
                }else if( valist[i] === 3){
                    setTimeout(function(){ 
                        snackBarInputSex();
                    }, 6000);
                }
            }
            return
        }
        var inputSex = document.querySelector('input[name="sex"]:checked').value;
        var length = data.length;
        var id;
        if(length === 0){
            id = 1;
        }else{
            id = (data[length-1].id + 1)
        }
        var newContact = {id: id, name:inputName, telephone:inputTelephone, sex:inputSex, selected:false}
        props[0].CREATE(newContact)
        
        setTimeout(function(){ 
            setRedirectToExit(true);
            if(redirectToExit === true){
                return <Redirect to='/'/>;
            }
        }, 200);

    }

    const renderRedirect = () =>{
        if(redirectToExit === true){
            return <Redirect to='/'/>;
        }
        return null;
    }

    const handleClose = () => {
        setAlertInputName(false);
        setAlertInputTelephone(false);
        setAlertInputSex(false);
    };

    const snackBarInputName = () => {
        setAlertInputName(true);
    };

    const snackBarInputTelephone = () => {
        setAlertInputTelephone(true);
    };

    const snackBarInputSex = () => {
        setAlertInputSex(true);
    };

    const snackBarErrorExit = () => {
        setExitMSG(true);
    };

    return (
        <>
        {renderRedirect()}
        <div id="register" className="registerCSS"> 
            <form method="post" action=""> 
                <h1>Cadastrar</h1> 
                <label for="name">Nome:</label>
                <br/>
                <input required="required" type="text" placeholder="Nome" id="name" name="name" />
                <br/>
                <label for="telephone">Telefone:</label>    
                <br/>         
                <input required="required" type="text" placeholder="(xx)xxxxx-xxxx" id="telephone" name="telephone"/> 
                <br/>
                <label for="sex">Sexo:</label>    
                <br/>
                <input type="radio" id="male" name="sex" value="M"/>
                <label for="M">Masculino</label>
                <input type="radio" id="female" name="sex" value="F"/>
                <label for="F">Femenino</label>
                <input type="radio" id="other" name="sex" value="O"/>
                <label for="O">Outros</label>
                <br/>
                <input type="button" value="Salvar" onClick={save}></input>
                <input type="button" value="Sair" onClick={exit}></input>
            </form>
        </div>

        <Snackbar open={alertInputName} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning">
                Nome deve ter no minimo 3 Letras!
            </Alert>
        </Snackbar>

        <Snackbar open={alertInputTelephone} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning">
                Telefone Invalido!
            </Alert>
        </Snackbar>

        <Snackbar open={alertInputSex} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning">
                Selecione um Sexo!
            </Alert>
        </Snackbar>

        <Snackbar open={exitMSG} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                O Contato não será salvo!
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
        CREATE(newContact) {
            const action = saveContact(newContact)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
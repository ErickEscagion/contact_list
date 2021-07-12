import React, {useState} from 'react'
import { connect } from 'react-redux';
import{ Redirect } from 'react-router-dom'
import { saveContact } from '../store/actions/crud'

const Register = ( ...props) =>{
    var data = props[0].dataRedux;

    const [redirectToExit, setRedirectToExit] = useState(false);

    const exit = () =>{
        alert("A Criação não sera salva!");
        setRedirectToExit(true);
    }

    const isValidPhone = (phone) => {
        const brazilianPhoneRegex = /^\(\d{2}\)\d{4,5}-\d{4}$/gi;
        return brazilianPhoneRegex.test(phone);
    };

    const save = () =>{
        var inputName = document.querySelector("#name").value;
        if(inputName.length < 3){
            alert("Nome deve ter no minimo 3 Letras!");
            return;
        }
        var inputTelephone = document.querySelector("#telephone").value;
        if(!isValidPhone(inputTelephone)){
            alert("Telefone Invalido!");
            return;
        }
        if(!document.querySelector('input[name="sex"]:checked')){
            alert("Selecione um Sexo!");
            return;
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
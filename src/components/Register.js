import React, {useState} from 'react'
import{Redirect} from 'react-router-dom'

const Register = () =>{
    const [redirectToExit, setRedirectToExit] = useState(false);

    const exit = () =>{
        setRedirectToExit(true);
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
        <div>
            <h1>Cadastrar</h1>
        </div>
        <div className="register">
            <input type="button" value="Salvar"></input>
            <input type="button" value="Sair" onClick={exit}></input>
        </div>
        </>
    )
} 

export default Register;
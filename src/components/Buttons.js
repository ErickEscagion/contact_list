import React, {useState} from 'react'
import{Redirect} from 'react-router-dom'
import Table from './Table';

const Buttons = () =>{

    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToChange, setRedirectToChange] = useState(false);

    const register = () =>{
        setRedirectToRegister(true);
    }

    const change = () =>{
        setRedirectToChange(true);
    }

    const renderRedirect = () =>{
        if(redirectToRegister === true){
            return <Redirect to='/register'/>;
        }else if(redirectToChange === true){
            return <Redirect to='/change'/>;
        }
        return null;
    }

    return (
        <>
        {renderRedirect()}
        <div className="buttons">
            <input type="button" value="Cadastrar" onClick={register}></input>
            <input type="button" value="Alterar" onClick={change}></input>
            <input type="button" value="Excluir"></input>
        </div> 
        <Table></Table>
        </>
    )
} 

export default Buttons;
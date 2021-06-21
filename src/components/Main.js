import React, {useState} from 'react'
import{Redirect} from 'react-router-dom'
import Table from './Table/Table';
const Main = () =>{

    const data = [
        { name:'Erick', telephone:'(15)99818-1242', sex:'M'},
        { name:'Laura', telephone:'(15)12345-6789', sex:'F'}
    ]

    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToChange, setRedirectToChange] = useState(false);

    const register = () =>{
        setRedirectToRegister(true);
    }

    const change = () =>{
        setRedirectToChange(true);
    }

    const del = (oEvent) =>{
        console.log("Deleta");
    }

    const renderRedirect = () =>{
        if(redirectToRegister === true){
            return <Redirect to='/register'/>;
        }else if(redirectToChange === true){
            return <Redirect to='/change'/>;
        }
        return null;
    }

    const head = {
        id: 'Codigo',
        name: 'Nome',
        telephone: 'Telefone',
        sex: 'Sexo'
    }

    return (
        <>
        {renderRedirect()}
        <div className="main">
            <input type="button" value="Cadastrar" onClick={register}></input>
            <input type="button" value="Alterar" onClick={change}></input>
            <input type="button" value="Excluir" onClick={del}></input>
            <Table data={data} head={head}/>
        </div>
        </>
    )
} 

export default Main;
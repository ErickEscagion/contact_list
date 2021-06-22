import React, {useState} from 'react'
import{Redirect} from 'react-router-dom'
import Table from './Table/Table';
const Main = ({data, toggleSelected}) =>{

    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToChange, setRedirectToChange] = useState(false);

    const register = () =>{
        setRedirectToRegister(true);
    }

    const change = () =>{
        console.log(data)
        var aux = 0;
        for(let i = 0; i < data.length; i++){
            if(data[i].selected === true){
                aux++;
            }
        }
        if(aux === 0){
            alert("Selecione um Contato");
        }else if(aux === 1){
            setRedirectToChange(true);
        }else{
            alert("Selecione somente um Contato");
        }
    }

    const del = (oEvent) =>{
        //logica de pegar o(s) contato(s) e remove-los
        alert("Contato Deletado");
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
        sex: 'Sexo',
        selected: ' ',
    }

    return (
        <>
        {renderRedirect()}
        <div className="main">
            <input type="button" value="Cadastrar" onClick={register}></input>
            <input type="button" value="Alterar" onClick={change}></input>
            <input type="button" value="Excluir" onClick={del}></input>
            <Table data={data} head={head} toggleSelected={toggleSelected}/>
        </div>
        </>
    )
} 

export default Main;
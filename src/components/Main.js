import React, {useState} from 'react'
import{Redirect} from 'react-router-dom'
import Table from './Table/Table';

const Main = ({data, toggleSelected, setData}) =>{

    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToChange, setRedirectToChange] = useState(false);

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
            alert("Não selecione nenhum Contato!");
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
            alert("Selecione um Contato!");
        }else if(aux === 1){
            setRedirectToChange(true);
        }else{
            alert("Selecione somente um Contato!");
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
            alert("Selecione um ou mais contato(s)!");
        }else{
            var newContactlist = [];
            for(let i = 0; i < data.length; i++){
                if(data[i].selected === false){
                    newContactlist.push(data[i]);
                }
            }
            debugger
            setData(newContactlist);
            alert("Contato(s) Deletado(s)!");
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
            <Table data={data} head={head} toggleSelected={toggleSelected} setData={setData}/>
        </div>
        </>
    )
} 

export default Main;
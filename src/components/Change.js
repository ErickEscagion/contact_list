import React, {useState} from 'react'
import{Redirect} from 'react-router-dom'

const Change = () =>{
    const [redirectToExit, setRedirectToExit] = useState(false);

    const exit = () =>{
        setRedirectToExit(true);
    }

    const change = () =>{
        alert("Contato Alterado!!");
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
                <h1>Alterar</h1> 
                <label for="name">Nome:</label>
                <br/>
                <input required="required" type="text" placeholder="Nome" />
                <br/>
                <label for="telephone">Telefone:</label>    
                <br/>         
                <input required="required" type="text" placeholder="(xx)xxxxx-xxxx"/> 
                <br/>
                <input type="button" value="Salvar" onClick={change}></input>
                <input type="button" value="Sair" onClick={exit}></input>
            </form>
        </div>
        </>
    )
} 

export default Change;
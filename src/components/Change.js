import React, {useState} from 'react'
import{Redirect} from 'react-router-dom'

const Change = ({selectedLine, changeName, changeTelephone}) =>{
    const [redirectToExit, setRedirectToExit] = useState(false);
    const exit = () =>{
        setRedirectToExit(true);
    }

    const change = () =>{
        //alert("Contato Alterado!!");
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
                <h1>Alterar</h1> 
                <label for="name">Nome:</label>
                <br/>
                <input required="required" type="text" placeholder="Nome" value={selectedLine.name}  onChange={(e) => changeName(selectedLine.id, e.target.value)}/>
                <br/>
                <label for="telephone">Telefone:</label>    
                <br/>         
                <input required="required" type="text" placeholder="(xx)xxxxx-xxxx" value={selectedLine.telephone} onChange={(e) => changeTelephone(selectedLine.id, e.target.value)}/> 
                <br/>
                <input type="button" value="Salvar" onClick={change}></input>
                <input type="button" value="Sair" onClick={exit}></input>
            </form>
        </div>
        </>
    )
} 

export default Change;
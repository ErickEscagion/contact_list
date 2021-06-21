import React, {useState} from 'react'
import{Redirect} from 'react-router-dom'

const Register = () =>{
    const [redirectToExit, setRedirectToExit] = useState(false);

    const exit = () =>{
        setRedirectToExit(true);
    }

    const save = () =>{
        alert("Contato Salvo!!");
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
                <input required="required" type="text" placeholder="Nome" />
                <br/>
                <label for="telephone">Telefone:</label>    
                <br/>         
                <input required="required" type="text" placeholder="(xx)xxxxx-xxxx"/> 
                <br/>
                <label for="sex">Sexo:</label>    
                <br/>
                <input type="radio" id="male" name="sex" value="male"/>
                <label for="male">Masculino</label>
                <input type="radio" id="female" name="sex" value="female"/>
                <label for="female">Femenino</label>
                <input type="radio" id="other" name="sex" value="other" checked/>
                <label for="other">Outros</label>
                <br/>
                <input type="submit" value="Salvar" onClick={save}></input>
                <input type="button" value="Sair" onClick={exit}></input>
            </form>
        </div>
        </>
    )
} 

export default Register;
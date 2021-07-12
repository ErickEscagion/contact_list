import React, {useState} from 'react'
import{Redirect} from 'react-router-dom'
import Table from './Table/Table';
import { connect } from 'react-redux';
import { deleteContact } from '../store/actions/crud';

const Main = (props) =>{

    var data = props.dataRedux;

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
            alert("Selecione um contato!");
        }else if (aux === 1){
            var listIndicesExclude = [];
            for(let i = 0; i < data.length; i++){
                if(data[i].selected === true){
                    listIndicesExclude.push(data[i].id);
                }
            }
            props.DELETE(listIndicesExclude)
            alert("Contato Deletado!");
        }else{
            alert("Selecione apenas um contato!");
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

    return (
        <>
        {renderRedirect()}
        <div className="main">
            <input type="button" value="Cadastrar" onClick={register}></input>
            <input type="button" value="Alterar" onClick={change}></input>
            <input type="button" value="Excluir" onClick={del}></input>
            <Table {...props}/>
        </div>
        </>
    )
} 
function mapStateToProps(state){
    //console.log(state)
    return {
        dataRedux: state.data,
    }
}

function mapDispatchToProps (dispatch){
    return {
        DELETE(listIndicesExclude) {
            const action = deleteContact(listIndicesExclude)
            dispatch(action)
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);
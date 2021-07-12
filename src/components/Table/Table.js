import React from 'react'
import { connect } from 'react-redux';
import { selected } from '../../store/actions/crud';

const head = {
    id: 'Codigo',
    name: 'Nome',
    telephone: 'Telefone',
    sex: 'Sexo',
    selected: ' ',
}

const toggleSelected = (id, data, ...props) =>{
    var aux = data
    var length = Object.keys(aux).length
    for(let i = 0; i < length; i++){
        if(aux[i].id === (id)){
            aux[i].selected = !aux[i].selected
        }
    }
    if(!Array.isArray(aux)){
        aux = Object.values(aux)
    }
    props[0].props[0].SELECTED(aux)
}

const Head = ({keys, head}) =>{
    const tableHead = head || {}
    return(
        <thead>
            <tr key = 'keyHead'>
            <label/>
                {
                    keys.map(key => <th key={key}>{tableHead[key] || key}</th>)
                }
            </tr>
        </thead>
    )
}

const Row = ({record, data, ...props}) =>{
    const keys = Object.keys(record);
    return (
        <tr key={record.id}>
            <label key={record.id} ><input type="checkbox" key={record.id} checked={record.selected} onChange={() => toggleSelected(record.id, data, props)} /></label>
            {
                keys.map(key => <td key={key + record.id}>{record[key]}</td>)
            }
        </tr>
    )
}

const Table = (...props) =>{
    var data = props[0].dataRedux;
    if(data.length > 0){
        const keys = Object.keys(data[0])
        return (
            <div className="table">
                <table key="table">
                    <Head keys={keys} head={head} />
                    <tbody>
                        { data.map(record => <Row record={record} data={data} props={props} />) }
                    </tbody>
                </table>
            </div>
        )
    }else{
        return (
            <div className="table">
                <h1>Sem Dados</h1>
            </div>
        )
    }
} 

function mapStateToProps(state){
    return {
        dataRedux: state.data,
    }
  }

function mapDispatchToProps (dispatch){
    return {
        SELECTED(contacts) {
            const action = selected(contacts)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);
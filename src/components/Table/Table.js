import React from 'react'

const Head = ({keys, head}) =>{
    const tableHead = head || {}
    return(
        <thead>
            <tr>
            <label/>
                {
                    keys.map(key => <th key={key}>{tableHead[key] || key}</th>)
                }
            </tr>
        </thead>
    )
}
const Row = ({record}) =>{
    const keys = Object.keys(record);
    return (
        <tr key={record.id}>
            <label><input type="checkbox" id="cb"/></label>
            {
                keys.map(key => <td key={key}>{record[key]}</td>)
            }
        </tr>
    )
}
const Table = ({ data, head }) =>{
    const keys = Object.keys(data[0])
    return (
        <div className="table">
            <table id="table">
                <Head keys={keys} head={head} />
                <tbody>
                    { data.map(record => <Row record={record}/>) }
                </tbody>
            </table>
        </div>
    )
} 

export default Table;
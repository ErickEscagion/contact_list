import React from 'react'

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
const Row = ({record, toggleSelected}) =>{
    const keys = Object.keys(record);
    return (
        <tr key={record.id}>
            <label key={record.id} ><input type="checkbox" key={record.id} checked={record.selected} onChange={() => toggleSelected(record.id)}/></label>
            {
                keys.map(key => <td key={key + record.id}>{record[key]}</td>)
            }
        </tr>
    )
}
const Table = ({data, head, toggleSelected }) =>{
    const keys = Object.keys(data[0])
    return (
        <div className="table">
            <table key="table">
                <Head keys={keys} head={head} />
                <tbody>
                    { data.map(record => <Row record={record} toggleSelected={toggleSelected}/>) }
                </tbody>
            </table>
        </div>
    )
} 

export default Table;



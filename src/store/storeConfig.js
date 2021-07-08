import {createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    numeros: function(state, action){
        //console.log(state, '', action)
        return{
            min: 1,
            max: 10
        }
    },
    data: function(state, action){
        //console.log(state, '', action)
        return([
            { id: 1, name:'Erick', telephone:'(15)99818-1242', sex:'M', selected:false},
            { id: 2, name:'Laura', telephone:'(15)12345-6789', sex:'F', selected:false}
        ])
    }

})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig
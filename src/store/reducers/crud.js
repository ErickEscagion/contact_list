import { CREATE_CONTACT, DELETE_CONTACT, TOGGLE_SELECTED } from "../actions/actionTypes"

const initialState = [
    { id: 1, name:'Erick', telephone:'(15)99818-1242', sex:'M', selected:false},
    { id: 2, name:'Laura', telephone:'(15)12345-6789', sex:'F', selected:false}
]


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    
    switch(action.type){
        case CREATE_CONTACT:
            return[
                ...state,
                action.payload
            ]

        case DELETE_CONTACT:
            console.log(action)
            console.log(state)
            var newContactlist = []
            for(let i = 0; i < state.length; i++){
                if(state[i].id !== action.payload[0]){
                    newContactlist.push(state[i])
                }
            }
            return newContactlist

        case TOGGLE_SELECTED:
            return[
                ...state
            ]

            
        default:
            return state
    }
}
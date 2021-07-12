import { CREATE_CONTACT } from "../actions/actionTypes"

const initialState = [
    { id: 1, name:'Erick', telephone:'(15)99818-1242', sex:'M', selected:false},
    { id: 2, name:'Laura', telephone:'(15)12345-6789', sex:'F', selected:false}
]


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case CREATE_CONTACT:
            console.log('Create' ,...state, '', action.payload)
            return[
                ...state,
                action.payload
            ]
            default:
                return state
    }
}
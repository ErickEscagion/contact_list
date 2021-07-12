import { CREATE_CONTACT } from "./actionTypes"

export function saveContact(newContact){
    return {
        type: CREATE_CONTACT,
        payload: newContact
    }
}
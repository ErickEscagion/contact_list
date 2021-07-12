import { CREATE_CONTACT, TOGGLE_SELECTED, DELETE_CONTACT, CHANGE_CONTACT } from "./actionTypes"

export function saveContact(newContact){
    return {
        type: CREATE_CONTACT,
        payload: newContact
    }
}

export function selected(contacts){
    return {
        type: TOGGLE_SELECTED,
        payload: contacts
    }
}

export function deleteContact(contacts){
    return {
        type: DELETE_CONTACT,
        payload: contacts
    }
}

export function changeContact(contact){
    return {
        type: CHANGE_CONTACT,
        payload: contact
    }
}
import { partsRef } from '../config/firebase';
import { FETCH_PARTS, FETCH_PART } from './types';

export const fetchParts = () => async dispatch => {    
    partsRef.on('value', snapshot => {
        dispatch({
            type: FETCH_PARTS,
            payload: snapshot.val()
        });
    });
}

export const fetchPart = (partId) => async dispatch => {
    partsRef
        .child(partId)
        .once('value')
        .then(snapshot => {
            dispatch({
                type: FETCH_PART,
                payload: snapshot.val()
            });
        });
}

export const addPart = newPart => async dispatch => {
    partsRef.push().set(newPart);
}

export const deletePart = (partId) => async dispatch => {
    partsRef.child(partId).remove();
}
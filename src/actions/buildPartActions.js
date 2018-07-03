import { buildPartsRef } from '../config/firebase';

import { FETCH_BUILD_PARTS, FETCH_BUILD_PART } from './types';

export const fetchBuildParts = (buildId) => async dispatch => {
    buildPartsRef
        .orderByChild('buildId')
        .equalTo(buildId)
        
        .on('value', snapshot => {
        dispatch({
            type: FETCH_BUILD_PARTS,
            payload: snapshot.val()
        });
    });
}

export const fetchBuildPart = (buildPartId) => async dispatch => {
    buildPartsRef
        .child(buildPartId)
        .once('value')
        .then(snapshot => {
            console.log('got a buildPart', snapshot.val());
            dispatch({
                type: FETCH_BUILD_PART,
                payload: snapshot.val()
            });
        });
}

export const addBuildPart = newBuildPart => async dispatch => {
    buildPartsRef.push().set(newBuildPart);
}

export const deleteBuildPart = (buildPartId) => async dispatch => {
    buildPartsRef.child(buildPartId).remove();
}
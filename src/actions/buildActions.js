import { buildsRef } from '../config/firebase';
import { FETCH_BUILDS, FETCH_BUILD } from './types';

export const fetchBuilds = () => async dispatch => {
    buildsRef.on('value', snapshot => {
        console.log('got builds', snapshot.val());        
        dispatch({
            type: FETCH_BUILDS,
            payload: snapshot.val()
        });
    });
}

export const fetchBuild = (buildId) => async dispatch => {
    buildsRef
        .child(buildId)
        .once('value')
        .then(snapshot => {
            console.log('got a build', snapshot.val());
            dispatch({
                type: FETCH_BUILD,
                payload: snapshot.val()
            });
        });
}

export const addBuild = newBuild => async dispatch => {
    buildsRef.push().set(newBuild);
}

export const deleteBuild = (buildId) => async dispatch => {
    buildsRef.child(buildId).remove();
}
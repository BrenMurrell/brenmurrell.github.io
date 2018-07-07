import { caseStudiesRef, caseStudyRef } from '../config/firebase';
import { FETCH_CASE_STUDIES, FETCH_CASE_STUDY } from './types';

export const fetchCaseStudies = () => async dispatch => {
    caseStudiesRef.on('value', snapshot => {
        var caseStudyArray = [];
        snapshot.forEach(function(value) {
            caseStudyArray.push(value.val());
        });
        
        dispatch({
            type: FETCH_CASE_STUDIES,
            payload: caseStudyArray
        });
    });
}


export const fetchCaseStudy = (caseStudyId) => async dispatch => {
    caseStudyRef
        .child(caseStudyId)
        .once('value')
        .then(snapshot => {
            console.log('got a case study', snapshot.val());
            dispatch({
                type: FETCH_CASE_STUDY,
                payload: snapshot.val()
            });
        });
}
export const addCaseStudy = newCaseStudy => async dispatch => {
    caseStudiesRef.push().set(newCaseStudy);
}
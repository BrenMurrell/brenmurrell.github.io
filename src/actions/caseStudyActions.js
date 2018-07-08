import { caseStudiesRef, caseStudyRef } from '../config/firebase';
import { FETCH_CASE_STUDIES, FETCH_CASE_STUDY } from './types';

//move this to separate reusable function
var slugify = stringVal => {
    return stringVal.replace(/\s+/g, '-').toLowerCase();
}

export const fetchCaseStudies = () => async dispatch => {
    caseStudiesRef.on('value', snapshot => {
        var caseStudyArray = [];
        snapshot.forEach(function(value) {
            caseStudyArray.push(value.val());
        });
        
        dispatch({
            type: FETCH_CASE_STUDIES,
            payload: snapshot.val()
        });
    });
}

export const updateCaseStudy = (caseStudy) => async dispatch => {
    
    caseStudiesRef
        .child(caseStudy.caseStudyId)
        .update(caseStudy)
        .then(() => {
            return {};
        }).catch(error => {
            return {
                errorCode: error.code,
                errorMessage: error.message
            }
        });       
}



export const fetchCaseStudy = (caseStudyId) => async dispatch => {
    caseStudyRef
        .child(caseStudyId)
        .once('value')
        .then(snapshot => {
            dispatch({
                type: FETCH_CASE_STUDY,
                payload: snapshot.val()
            });
        });
}

export const deleteCaseStudy = caseStudyId => async dispatch => {
    caseStudiesRef.child(caseStudyId).remove();
}
export const addCaseStudy = newCaseStudy => async dispatch => {
    //caseStudiesRef.push().set(newCaseStudy);
    var projectSlug = slugify(newCaseStudy.title);
    caseStudiesRef.child(projectSlug).set(newCaseStudy);
}
import { caseStudiesRef } from '../config/firebase';
import { FETCH_CASE_STUDIES } from './types';

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
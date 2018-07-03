import { caseStudiesRef } from '../config/firebase';
import { FETCH_CASE_STUDIES } from './types';

export const fetchCaseStudies = () => async dispatch => {
    caseStudiesRef.on('value', snapshot => {
        console.log('got case studies', snapshot.val());        
        dispatch({
            type: FETCH_CASE_STUDIES,
            payload: snapshot.val()
        });
    });
}
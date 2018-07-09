import { jobsRef } from '../config/firebase';
import { FETCH_JOBS, FETCH_JOB } from './types';

//move this to separate reusable function
var slugify = stringVal => {
    return stringVal.replace(/\s+/g, '-').toLowerCase();
}

export const fetchJobs = () => async dispatch => {
    jobsRef.on('value', snapshot => {
        var jobArray = [];
        snapshot.forEach(function(value) {
            jobArray.push(value.val());
        });
        
        dispatch({
            type: FETCH_JOBS,
            payload: snapshot.val()
        });
    });
}

export const updateJob = (job) => async dispatch => {
    jobsRef
        .child(job.jobId)
        .update(job)
        .then(() => {
            return {};
        }).catch(error => {
            return {
                errorCode: error.code,
                errorMessage: error.message
            }
        });       
}



export const fetchJob = (jobId) => async dispatch => {
    jobsRef
        .child(jobId)
        .once('value')
        .then(snapshot => {
            dispatch({
                type: FETCH_JOB,
                payload: snapshot.val()
            });
        });
}

export const deleteJob = jobId => async dispatch => {
    jobsRef.child(jobId).remove();
}
export const addJob = newjob => async dispatch => {
    var jobSlug = slugify(newjob.title);
    newjob.jobId = jobSlug;
    jobsRef.child(jobSlug).set(newjob);
}
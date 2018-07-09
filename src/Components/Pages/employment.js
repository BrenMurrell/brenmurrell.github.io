import React, { Component } from 'react';
import * as actions from "../../actions/jobActions";
import { connect } from 'react-redux';
import _ from 'lodash';
import Job from '../Job';

import MetaTags from 'react-meta-tags';

class Employment extends Component {
    componentDidMount() {
            this.loadTimeout = setTimeout(function () {
                this.setState({'moduleClass': 'module--loaded'});
            }.bind(this), 0);
    }



    renderJobs() {
        const { jobs } = this.props;
        if(jobs === 'loading') {
            return <h2>Loading....</h2>
        }
        const sortedJobs = _.orderBy(jobs, ['order'], ['desc']);
        const jobsList = sortedJobs.map((value, key) => {
            return <Job key={value.jobId} jobId={value.jobId} job={value}/>            
        });
        if (typeof jobsList !== 'undefined' && jobsList.length > 0) {
            return jobsList;
        }
        return (
            <div>No employment history found</div>
        )

        
    }
    componentWillMount() {
        this.props.fetchJobs();
    }
    render() {

        return (
            <section className="module module--employment">
                <div className="module__copy">
                    <h1 className="module__title">Employment history</h1>
                    <div className="cards cards--half">
                        { this.renderJobs() }
                        
                        
                          
                    </div>
                </div>
                
                    <MetaTags>
                        <title>Employment History | Bren Murrell</title>
                        <meta name="description" content="A canonical listing of all of my current and previous employers / responsibilities" />
                    </MetaTags>
                
            </section>
        )
    }
}

const mapStateToProps = ({jobs}) => {
    return {
        jobs
    };
};

export default connect(mapStateToProps, actions)(Employment);
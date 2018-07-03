import React, { Component } from 'react';
import * as actions from "../../actions/caseStudyActions";
import { connect } from 'react-redux';
import _ from 'lodash';

import CaseStudy  from '../CaseStudy';

class CaseStudies extends Component {
    constructor(props) {
        super();
        this.state = {
            //buildTitle: '', buildClass: ''
        };
        //this.handleChange = this.handleChange.bind(this);
    }

    rendercaseStudies() {
        const { caseStudies } = this.props;
        const caseStudiesList = _.map(caseStudies, (value, key) => {
            return <CaseStudy key={key} caseStudyId={key} caseStudy={value}/>

        });
        if(!_.isEmpty(caseStudiesList)) {
            return caseStudiesList;
        }
        return (
            <div>No Case Studies found</div>
        )

        
    }
    componentWillMount() {
        this.props.fetchCaseStudies();
    }
    render() {
        if(this.props.caseStudies === "loading") {
            return (
                <p>Loading...</p>
            );
        }
        return (
            <section className="module module--case-studies">
                <div className="module__copy">
                    <h1 className="module__title">Case Studies</h1>
                    <div className="cards">
                        {this.rendercaseStudies() }

                        
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = ({caseStudies}) => {
    return {
        caseStudies
    };
};

export default connect(mapStateToProps, actions)(CaseStudies);
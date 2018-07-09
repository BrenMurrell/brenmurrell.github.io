import React, { Component } from 'react';
import * as actions from "../../actions/caseStudyActions";
import { connect } from 'react-redux';
import _ from 'lodash';
import MetaTags from 'react-meta-tags';

import CaseStudy  from '../CaseStudy';

class CaseStudies extends Component {
    constructor(props) {
        super();
        this.state = {
            caseStudiesList: [],
            'moduleClass': '' 
        };
    }

    componentDidMount() {
            this.loadTimeout = setTimeout(function () {
                this.setState({'moduleClass': 'module--loaded'});
            }.bind(this), 0);
    }



    rendercaseStudies() {
        const { caseStudies } = this.props;        
        const sortedCaseStudies = _.orderBy(caseStudies, ['order'], ['asc']);
        const caseStudiesList = sortedCaseStudies.map((value, key) => {
            return <CaseStudy key={key} caseStudyId={key} caseStudy={value}/>            
        });
        if (typeof caseStudiesList !== 'undefined' && caseStudiesList.length > 0) {
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
                <section className={`module module--case-studies ${this.state.moduleClass}`}>
                    <div className="module__copy">
                        <h1 className="module__title">Case Studies</h1>
                    </div>
                </section>
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
                
                <MetaTags>
                    <title>Case Studies | Bren Murrell</title>
                    <meta name="description" content="Where can I add value for you today? Find out through my case studies." />
                </MetaTags>
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
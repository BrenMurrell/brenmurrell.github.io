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
                <MetaTags>
                    <title>Case Studies | Bren Murrell</title>
                    <meta name="description" content="Where can I add value for you today? Find out through my case studies." />
                    <meta property="og:title" content="Case Studies | Bren Murrell" />
                    <meta property="og:image" content="/img/covers/ribs.jpg" />
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
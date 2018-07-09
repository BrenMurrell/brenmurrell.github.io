import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'

import Card from './Generic/card';

class CaseStudy extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { caseStudy } = this.props;
        return(
            <Card title={caseStudy.title} subtitle={caseStudy.role} copy={caseStudy.copy} link={caseStudy.url} footer={caseStudy.company} />
        )
    }

}

export default connect(null, null)(CaseStudy);
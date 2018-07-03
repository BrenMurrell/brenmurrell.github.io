import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class CaseStudy extends Component {

    

    render() {
        const { build, buildId } = this.props;
        return(
            <div className="builds-list__item">
                <img alt="placeholder" src="https://via.placeholder.com/200x100" />
                <h3><Link to={`/rc-build-logger/builds/${buildId}`} >{build.title}</Link></h3>
                <p>{build.class}</p>
            </div>
        )
    }

}

export default connect(null, null)(CaseStudy);
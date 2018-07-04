import React, { Component } from 'react';
import { connect } from 'react-redux';


class CaseStudy extends Component {
    constructor(props) {
        super(props);
        this.state = { 'cardClass': '' };
    }
    componentDidMount() {
            this.loadTimeout = setTimeout(function () {
                this.setState({'cardClass': 'card--loaded'});
            }.bind(this), 0);
    }
    

    render() {
        const { caseStudy } = this.props;
        return(
            <div className={`card ${this.state.cardClass}`}>
                <header className="card__header">
                    <h2 className="card__title">{ caseStudy.title }</h2>
                    <h3 className="card__subtitle">{ caseStudy.role }</h3>
                </header>
                <div className="card__body">
                    <div dangerouslySetInnerHTML={{ __html: caseStudy.copy  }} />
                </div>
                <footer className="card__footer">
                    <h4 className="card__meta">{ caseStudy.company }</h4>
                </footer>
            </div>

        )
    }

}

export default connect(null, null)(CaseStudy);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'


class Job extends Component {
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
        const { job } = this.props;
        return(
            <div className={`card ${this.state.cardClass}`}>
                <header className="card__header">
                    <div className="card__header-content">
                        <h2 className="card__title">{ job.title }</h2>
                        <h3 className="card__subtitle">{ job.role }</h3>
                    </div>
                </header>
                <div className="card__body">
                    <div dangerouslySetInnerHTML={{ __html: job.copy  }} />
                </div>
                <footer className="card__footer">
                    <h4 className="card__meta">{ job.dates }</h4>
                </footer>
            </div>

        )
    }

}

export default connect(null, null)(Job);
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 'cardClass': '' };
    }
    componentDidMount() {
            this.loadTimeout = setTimeout(function () {
                this.setState({'cardClass': 'card--loaded'});
            }.bind(this), 0);
    }
    
    renderLink(caseStudyUrl) {
        if(caseStudyUrl) {
            return(
                <div className="card__header-visit">
                    <a className="card__header-link" href={caseStudyUrl} target="_blank" rel="noopener">
                        Visit <FontAwesomeIcon icon={faLink} />
                    </a>
                </div>
            )
        }
    }
    render() {
        const { title, subtitle, link, copy, footer } = this.props;
        return(
            <div className={`card ${this.state.cardClass}`}>
                <header className="card__header">
                    <div className="card__header-content">
                        <h2 className="card__title">{ title }</h2>
                        <h3 className="card__subtitle">{ subtitle }</h3>
                    </div>
                    { this.renderLink(link) }
                </header>
                <div className="card__body" dangerouslySetInnerHTML={{ __html: copy  }} />
                <footer className="card__footer">
                    <h4 className="card__meta">{ footer }</h4>
                </footer>
            </div>
        )
    }

}
Card.propTypes = {
    title: PropTypes.string,
}
Card.defaultProps = {
    title: 'Title',
}
export default Card;
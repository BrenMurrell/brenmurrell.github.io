import React, { Component } from 'react';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';


class Button extends Component { 
    render() {
        const { title, link } = this.props;
        return(
            <button className="c-btn c-btn--pri">
                <Link className="c-btn__link" to={link}>{title}</Link>
            </button>
        )
    }
}
Button.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string
}
Button.defaultProps = {
    title: 'Title',
    link: '/'
}
export default Button;
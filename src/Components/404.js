import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Error404 extends Component {
    
    render() {

        return (
            <section className="module module--summary module--alt module--centered module--narrow">
                    <div className="module__copy">
                        <h1 className="module__title">404 - Component Not Found</h1>
                        <p>Uh oh. Looks a bit like you couldn't find what you were looking for. Probably my fault!</p>
                        <p>Please just jump back to the <Link to={`/`}>landing page</Link> and try and find your way from there.</p>
                    </div>
                </section> 
        )
    }
}

export default Error404;
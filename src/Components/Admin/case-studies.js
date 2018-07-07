import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/caseStudyActions";
import { Link } from 'react-router-dom';

class AdminCaseStudies extends Component {
    constructor(props) {
        super();
        this.state = {
            caseStudiesList: [],
            'moduleClass': '' 
        };
    }
    rendercaseStudies() {
        const { caseStudies } = this.props;
        const caseStudiesList = caseStudies.map((value, key) => {
            return( 
                <div key={key}>
                    { value.title} <Link to={`/admin/case-studies/` + key}>EDIT</Link>
                </div>
            )
        });
        if (typeof caseStudiesList !== 'undefined' && caseStudiesList.length > 0) {
            return caseStudiesList;
        }
        return (
            <div>No Case Studies found</div>
        )

        
    }
    componentDidMount() {
        this.props.fetchCaseStudies();
        
    }
    
    render() {
        const { caseStudies } = this.props;
        console.log('case studies', caseStudies);
        if(this.props.caseStudies === "loading") {
            return <h1>Loading case studies...</h1>
        }
        return(
            <div>
                { this.rendercaseStudies() }
            </div>
        )
    }
}
// export default(AdminCaseStudies);
function mapStateToProps({ auth, caseStudies }) {
    return { auth, caseStudies };
  }
  
  export default connect(mapStateToProps, actions)(AdminCaseStudies);
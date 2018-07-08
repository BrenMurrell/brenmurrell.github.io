import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/caseStudyActions";
import { Link } from 'react-router-dom';
import _ from 'lodash';
class AdminCaseStudies extends Component {
    constructor(props) {
        super();
        this.state = {
            caseStudiesList: [],
            'moduleClass': '',
            adding: false,
            title: '',
            role: '',
            copy: '',
            company: '',
            url: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    deleteCaseStudy(caseStudyId) {
        this.props.deleteCaseStudy(caseStudyId);
    }
    rendercaseStudies() {
        const { caseStudies } = this.props;
        const caseStudiesList = _.map(caseStudies, (value, key) => {
            return( 
                <div key={key}>
                    { value.title} <Link to={`/admin/case-studies/` + key}>EDIT</Link>
                    <button onClick={() => this.deleteCaseStudy(key)}>DELETE</button>
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
    toggleAdding() {
        this.setState( {
            adding: !this.state.adding
        })
    }
    handleAddFormSubmit = event => {
        const { title, company, role, copy, url } = this.state;
        const { addCaseStudy } = this.props;
        addCaseStudy({ title: title, role: role, copy: copy, company: company, url: url });
        event.preventDefault();
        
    }
    rendercaseStudiesForm() {
        return (
            <form onSubmit={this.handleAddFormSubmit}>
                <label className="c-label" htmlFor="cs-title">Project title</label>
                <input 
                    className="c-input"
                    type="text"
                    id="cs-title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                />
                <label className="c-label" htmlFor="cs-role">Project role</label>
                <input 
                    className="c-input"
                    type="text"
                    id="cs-role"
                    value={this.state.role}
                    onChange={this.handleChange}
                    name="role"
                />
                <label className="c-label" htmlFor="cs-company">Project company</label>
                <input 
                    className="c-input"
                    type="text"
                    id="cs-company"
                    value={this.state.company}
                    onChange={this.handleChange}
                    name="company"
                />
                <label className="c-label" htmlFor="cs-url">Project URL</label>
                <input 
                    className="c-input"
                    type="text"
                    id="cs-url"
                    value={this.state.url}
                    onChange={this.handleChange}
                    name="url"
                />
                <label className="c-label" htmlFor="cs-copy">Description</label>
                <textarea 
                    className="c-textarea"
                    name="copy" 
                    value={this.state.copy}
                    onChange={this.handleChange}
                    id="cs-copy"
                ></textarea>
                <input type="submit" value="GO!" />
            </form>
        )
    }
    render() {
        const { caseStudies } = this.props;
        if(this.props.caseStudies === "loading") {
            return <h1>Loading case studies...</h1>
        }
        if(this.state.adding) {
            return (
                <div>
                    { this.rendercaseStudiesForm() }
                    <button onClick={this.toggleAdding.bind(this)   }>Cancel</button>
                </div>
            )
        }
        return(
            <div>
                <button onClick={this.toggleAdding.bind(this)}>Add new case study</button>
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
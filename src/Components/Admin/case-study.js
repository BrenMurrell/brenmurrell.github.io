import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/caseStudyActions";


class AdminCaseStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseStudyId: this.props.match.params.caseStudyId,
            title: '',
            role: '',
            company: '',
            copy: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    componentWillMount() {

        this.props.fetchCaseStudy(this.state.caseStudyId); 
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.caseStudies.title,
            company: nextProps.caseStudies.company,
            role: nextProps.caseStudies.role,
            copy: nextProps.caseStudies.copy
        })
    }
    handleFormSubmit = event =>  {
        const { title, company, role, copy, caseStudyId } = this.state;
        const { updateCaseStudy } = this.props;
        updateCaseStudy({ title: title, role: role, copy: copy, company: company, caseStudyId: caseStudyId });
        event.preventDefault();
    }
    renderForm() {
        return(
            <form onSubmit={this.handleFormSubmit}>
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
        if(this.props.caseStudy === "loading") {
            return <h1>Loading case study...</h1>
        }
        return(
            <div>
                Gottem - { this.props.match.params.caseStudyId }
                { this.renderForm(caseStudies) }
                { caseStudies.title } - { caseStudies.company }
            </div>
        )
    }
}
// export default(AdminCaseStudies);
function mapStateToProps({ auth, caseStudies }) {
    return { auth, caseStudies };
}

  
export default connect(mapStateToProps, actions)(AdminCaseStudy);
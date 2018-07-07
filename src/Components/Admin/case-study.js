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
        console.log('next props', nextProps);
        this.setState({
            title: nextProps.caseStudies.title,
            company: nextProps.caseStudies.company,
            role: nextProps.caseStudies.role,
            copy: nextProps.caseStudies.copy
        })
    }
    handleFormSubmit = event =>  {
        console.log('submit', this.state.title, this.state.company, this.state.role, this.state.copy);
        event.preventDefault();
    }
    renderForm() {
        const { caseStudies } = this.props;
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input 
                    type="text"
                    id="cs-title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                /><br/>
                <input 
                    type="text"
                    id="cs-role"
                    value={this.state.role}
                    onChange={this.handleChange}
                    name="role"
                /><br/>
                <input 
                    type="text"
                    id="cs-company"
                    value={this.state.company}
                    onChange={this.handleChange}
                    name="company"
                /><br/>
                <textarea 
                    name="copy" 
                    value={this.state.copy}
                    onChange={this.handleChange}
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
        //this.setState({ 'title': 'and a wee test'});
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
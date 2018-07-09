import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/caseStudyActions";
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

class AdminCaseStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseStudyId: this.props.match.params.caseStudyId,
            title: '',
            role: '',
            company: '',
            copy: '',
            url: '',
            order: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeQuill = this.handleChangeQuill.bind(this)
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    handleChangeQuill(value) {
        this.setState({ copy: value })
    }
    componentWillMount() {

        this.props.fetchCaseStudy(this.state.caseStudyId); 
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.caseStudies.title,
            company: nextProps.caseStudies.company,
            role: nextProps.caseStudies.role,
            copy: nextProps.caseStudies.copy,
            url: nextProps.caseStudies.url,
            order: nextProps.caseStudies.order
        })
    }
    handleFormSubmit = event =>  {
        const { title, company, role, copy, caseStudyId, url, order } = this.state;
        const { updateCaseStudy } = this.props;
        updateCaseStudy({ title: title, role: role, copy: copy, company: company, caseStudyId: caseStudyId, url: url, order: order });
        this.props.history.push('/admin/case-studies');
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
                <label className="c-label" htmlFor="cs-role">Project URL</label>
                <input 
                    className="c-input"
                    type="text"
                    id="cs-url"
                    value={this.state.url}
                    onChange={this.handleChange}
                    name="url"
                    placeholder="Leave blank for no link"
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
                <label className="c-label" htmlFor="cs-order">Order</label>
                <input 
                    className="c-input"
                    type="number"
                    id="cs-order"
                    value={this.state.order}
                    onChange={this.handleChange}
                    name="order"
                />
                <label className="c-label" htmlFor="cs-copy">Description</label>

                <ReactQuill 
                    theme="snow"
                    value={this.state.copy}
                    onChange={this.handleChangeQuill} 
                    name="copy"
                    id="cs-copy" 
                    className="c-textarea"   
                />

                <br/><br/>
                
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
                { this.renderForm(caseStudies) }
            </div>
        )
    }
}
// export default(AdminCaseStudies);
function mapStateToProps({ auth, caseStudies }) {
    return { auth, caseStudies };
}

  
export default connect(mapStateToProps, actions)(AdminCaseStudy);
import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/jobActions";
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

class AdminJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobId: this.props.match.params.jobId,
            title: '',
            role: '',
            dates: '',
            copy: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeQuill = this.handleChangeQuill.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    handleChangeQuill(value) {
        this.setState({ copy: value })
    }
    componentWillMount() {

        this.props.fetchJob(this.state.jobId); 
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.jobs.title,
            role: nextProps.jobs.role,
            dates: nextProps.jobs.dates,
            copy: nextProps.jobs.copy,
        })
    }
    handleFormSubmit = event =>  {
        const { title, role, copy, dates, jobId } = this.state;
        const { updateJob } = this.props;
        updateJob({ title: title, role: role, copy: copy, dates: dates, jobId: jobId });
        this.props.history.push('/admin/employment');
        event.preventDefault();
    }
    renderForm() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <label className="c-label" htmlFor="cs-title">Company name</label>
                <input 
                    className="c-input"
                    type="text"
                    id="cs-title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                />
                <label className="c-label" htmlFor="cs-role">Job Title (role)</label>
                <input 
                    className="c-input"
                    type="text"
                    id="cs-role"
                    value={this.state.role}
                    onChange={this.handleChange}
                    name="role"
                />
                <label className="c-label" htmlFor="cs-dates">Dates</label>
                <input 
                    className="c-input"
                    type="text"
                    id="cs-dates"
                    value={this.state.dates}
                    onChange={this.handleChange}
                    name="dates"
                    placeholder="e.g. January 2018 - Present"
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
        const { jobs } = this.props;
        if(this.props.job === "loading") {
            return <h1>Loading job...</h1>
        }
        return(
            <div>
                { this.renderForm(jobs) }
            </div>
        )
    }
}
// export default(AdminJobs);
function mapStateToProps({ auth, jobs }) {
    return { auth, jobs };
}

  
export default connect(mapStateToProps, actions)(AdminJob);
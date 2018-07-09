import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/jobActions";
import { Link } from 'react-router-dom';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

import _ from 'lodash';
class AdminJobs extends Component {
    constructor(props) {
        super();
        this.state = {
            jobsList: [],
            'moduleClass': '',
            adding: false,
            title: '',
            role: '',
            copy: '',
            dates: '',
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
    deleteJob(jobId) {
        this.props.deleteJob(jobId);
    }
    renderjobs() {
        const { jobs } = this.props;
        const sortedJobs = _.orderBy(jobs, ['order'], ['desc']);
        const jobsList = sortedJobs.map((value, key) => {
            return( 
                <div key={value.jobId}>
                    { value.title} <Link to={`/admin/employment/` + value.jobId}>EDIT</Link>
                    <button onClick={() => this.deleteJob(value.jobId)}>DELETE</button>
                </div>
            )
        });
        if (typeof jobsList !== 'undefined' && jobsList.length > 0) {
            return jobsList;
        }
        return (
            <div>No jobs found</div>
        )

        
    }
    componentDidMount() {
        this.props.fetchJobs();
        
    }
    toggleAdding() {
        this.setState( {
            adding: !this.state.adding
        })
    }
    handleAddFormSubmit = event => {
        const { title,  role, copy, dates, order } = this.state;
        const { addJob } = this.props;
        addJob({ title: title, role: role, copy: copy, dates: dates, order: order });
        this.props.history.push('/admin/employment');        
        event.preventDefault();
    }
    renderjobsForm() {
        return (
            <form onSubmit={this.handleAddFormSubmit}>
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
        if(this.props.jobs === "loading") {
            return <h1>Loading jobs...</h1>
        }
        if(this.state.adding) {
            return (
                <div>
                    { this.renderjobsForm() }
                    <button onClick={this.toggleAdding.bind(this)   }>Cancel</button>
                </div>
            )
        }
        return(
            <div>
                <button onClick={this.toggleAdding.bind(this)}>Add new Job</button>
                { this.renderjobs() }
            </div>
        )
    }
}
// export default(AdminJobs);
function mapStateToProps({ auth, jobs }) {
    return { auth, jobs };
  }
  
  export default connect(mapStateToProps, actions)(AdminJobs);
import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/caseStudyActions";
import { Link } from 'react-router-dom';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

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
    deleteCaseStudy(caseStudyId) {
        this.props.deleteCaseStudy(caseStudyId);
    }
    


    rendercaseStudies() {
        const { caseStudies } = this.props;        
        const sortedCaseStudies = _.orderBy(caseStudies, ['order'], ['asc']);
        const caseStudiesList = sortedCaseStudies.map((value, key) => {
            return( 
                <div className="dashpanel__item" key={value.caseStudyId}>
                    <Link className="dashpanel__button dashpanel__button--edit" to={`/admin/case-studies/` + value.caseStudyId}><FontAwesomeIcon icon={faEdit} /></Link>
                    <button className="dashpanel__button dashpanel__button--delete" onClick={() => this.deleteCaseStudy(value.caseStudyId)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    { value.title} ({value.order})
                </div>
            )
        });
        if (typeof caseStudiesList !== 'undefined' && caseStudiesList.length > 0) {
            return (
                <div className="dashpanel">
                    { caseStudiesList}
                </div>
            )
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
        const { title, company, role, copy, url, order } = this.state;
        const { addCaseStudy } = this.props;
        addCaseStudy({ title: title, role: role, copy: copy, company: company, url: url, order: order });
        this.props.history.push('/admin/case-studies');
        
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
                <button onClick={this.toggleAdding.bind(this)} className="dashpanel__button dashpanel__button--wide"><FontAwesomeIcon icon={faPlusCircle} /> Add new case study</button>
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
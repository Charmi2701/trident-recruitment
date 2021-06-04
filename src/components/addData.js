import React, { Component } from 'react'
//import axios from 'axios';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {addData} from '../actions/addData.js'
import {compose} from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import { Form } from 'react-bootstrap'
import '../styles/addData.css'
import ESNavbar from './navbar.js'

class AddData extends Component{
    state = {
        domain: 'AUV',
        applicantID: 0,
        applicantName: '',
        fDomainName: 'AUV',
    }

    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
        //console.log(this.state)
    }

    handleChangeNew = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
        //console.log(this.state)
    }

    domainMap = {
        "Design & Research": 'DR',
        "Innovation Lab": 'INN',
        "AUV": "AUV",
        "Satlab": "SAT",
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addData({
            domain: this.domainMap[this.state.fDomainName], 
            fDomainName: this.state.fDomainName,
            applicantID: this.state.applicantID,
            applicantName: this.state.applicantName
        });
        this.setState({
            domain: 'AUV',
            applicantID: 0,
            applicantName: '',
            fDomainName: 'AUV',
        })
        //console.log(this.state)
    }
    
    render() {
        const {applicantData} = this.props;
        const domainNames = applicantData ? Object.keys(applicantData) : null;
        //const domainNames = ["AUV", "SAT"];
        //console.log(this.props)
        //console.log(Object.keys(applicantData));
        return (
            <>
            <ESNavbar />
            <div className="container w-50 h-50">
                <div className="mx-auto py-5 px-5 border mt-5">
                    <h1 className="mb-3">Adding Data</h1>
                    <Form onSubmit={this.onSubmit} >
                        {/* <div className="form-group px-5">
                            <label htmlFor="exampleFormControlSelect1">Select Domain Name</label>
                            <select className="form-control" id="domain" onChange={this.handleChangeNew.bind(this)} >
                                {domainNames && domainNames.map((data, index) => {
                                    //console.log(data);
                                    return (
                                        <option key={index}>{data}</option>
                                    )
                                })}
                            </select>
                        </div> */}
                        <div className="form-group px-5">
                            <label htmlFor="exampleFormControlTextarea1">Enter Applicant ID</label>
                            <input type="number" className="form-control" id="applicantID" rows="1" onChange={this.handleChange} value={this.state.applicantID}></input>
                        </div>
                        <div className="form-group px-5">
                            <label htmlFor="exampleFormControlTextarea1">Enter Applicant Name</label>
                            <input type="text" className="form-control" id="applicantName" rows="1" onChange={this.handleChange} value={this.state.applicantName}></input>
                        </div>
                        <div className="form-group px-5">
                            <label htmlFor="exampleFormControlSelect1">Select Domain</label>
                            <select className="form-control" id="fDomainName" onChange={this.handleChangeNew.bind(this)} value={this.state.fDomainName}>
                                <option key="0">AUV</option>
                                <option key="1">Satlab</option>
                                <option key="2">Design & Research</option>
                                <option key="3">Innovation Lab</option>
                            </select>
                        </div>
                        <button className="btn mx-5 my-3 submit-button">Submit</button>
                    </Form>
                </div>
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    //console.log('State')
    //console.log(state.firebase.data.applicantData)
    return {
        applicantData: state.firebase.data.applicantData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addData: (newData) => dispatch(addData(newData)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firebaseConnect([
        'applicantData',
    ])
)(AddData);
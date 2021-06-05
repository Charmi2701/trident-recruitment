import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import DisplayTable from './displayTable';
import ESNavbar from './navbar';

function DisplayStatus(props) {
    const applicantData = props.applicantData;
    const domainNames = applicantData ? Object.keys(applicantData) : null;
    //console.log(props);
    if(!props.auth.uid) return <Redirect to='/signin'/>
    return (
        <>
        <ESNavbar />
        <div className="container w-50 h-50 ">
            {domainNames && domainNames.map((data,index) => {
                return(<DisplayTable domainName={data} key={index} />)
            })}
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    //console.log('State')
    //console.log(state)
    return {
        auth: state.firebase.auth,
        applicantData: state.firebase.data.applicantData,
    }
}

export default compose(
    connect(mapStateToProps),
    firebaseConnect([
        'applicantData',
    ])
)(DisplayStatus);
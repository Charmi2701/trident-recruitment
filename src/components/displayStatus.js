import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import DisplayTable from './displayTable';
import ESNavbar from './navbar';

function DisplayStatus(props) {
    const applicantData = props.applicantData;
    const domainNames = applicantData ? Object.keys(applicantData) : null;
    //console.log(domainNames);
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
    //console.log(state.firebase.data.applicantData)
    return {
        applicantData: state.firebase.data.applicantData,
    }
}

export default compose(
    connect(mapStateToProps),
    firebaseConnect([
        'applicantData',
    ])
)(DisplayStatus);
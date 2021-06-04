import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {markDone, markSelect, markOriginal} from '../actions/changeStatus'
import DisplayGreenRow from './displayGreenRow'

class DisplayTable extends Component {
    applicantData = this.props.applicantData;
    domainName = this.props.domainName;
    appData = this.applicantData ? Object.keys(this.applicantData[this.domainName]) : null;
    handleDone(aData) {
        return event => {
            event.preventDefault();
            //console.log(aData);
            this.props.markStatusDone({applicantID:aData.applicantID, domain:this.domainName})
        }
    }
    handleSelect(aData) {
        return event => {
            event.preventDefault();
            //console.log(aData);
            this.props.markStatusSelect({applicantID:aData.applicantID, domain:this.domainName})
        }
    }
    handleUndo(aData) {
        return event => {
            event.preventDefault();
            //console.log(aData);
            this.props.markStatusOriginal({applicantID:aData.applicantID, domain:this.domainName})
        }
    }
    render() {
        //console.log(this.props.ongoing ? this.props.ongoing["1"] ? true : false : null);
        return (
        <div className="mx-auto py-5 px-5 border mt-5">
            <Table bordered>
                <thead >
                    <tr>
                        <th colSpan="4" style={{textAlign:'center'}}>
                            {this.domainName}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.appData && this.appData.map((data, index) => {
                        return(
                                <DisplayGreenRow data={data} handleDone={this.handleDone} handleUndo={this.handleUndo} domainName={this.domainName} index={index} />
                        )
                    })}
                </tbody>
            </Table>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log('State')
    //console.log(state.firebase.data.applicantData)
    return {
        applicantData: state.firebase.data.applicantData,
        ongoing: state.firebase.data.ongoing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        markStatusDone: (changeData) => dispatch(markDone(changeData)),
        markStatusSelect: (changeData) => dispatch(markSelect(changeData)),
        markStatusOriginal: (changeData) => dispatch(markOriginal(changeData)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firebaseConnect([
        'applicantData',
        'ongoing',
    ])
)(DisplayTable);
import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {markDone, markSelect, markOriginal} from '../actions/changeStatus'

class DisplayGreenRow extends Component {
    handleDone(aData) {
        return event => {
            event.preventDefault();
            //console.log(aData);
            this.props.markStatusDone({applicantID:aData.applicantID, domain:this.props.domainName})
        }
    }
    handleSelect(aData) {
        return event => {
            event.preventDefault();
            //console.log(aData);
            this.props.markStatusSelect({applicantID:aData.applicantID, domain:this.props.domainName})
        }
    }
    handleUndo(aData) {
        return event => {
            event.preventDefault();
            //console.log(aData);
            this.props.markStatusOriginal({applicantID:aData.applicantID, domain:this.props.domainName})
        }
    }
    render() {
        if(!this.props.applicantData) return (<div></div>);
        
        return (
            <tr key={this.props.index} className={this.props.applicantData[this.props.domainName][this.props.data].status ? "table-success" : this.props.applicantData[this.props.domainName][this.props.data].ongoing ? "table-danger" : "table-warning"}>
                <td >
                    {this.props.applicantData[this.props.domainName][this.props.data].applicantID}
                </td>
                <td>
                    {this.props.applicantData[this.props.domainName][this.props.data].applicantName}
                </td>
                <td>
                    <Button onClick={this.handleDone(this.props.applicantData[this.props.domainName][this.props.data])}>Done</Button>
                </td>
                <td>
                    {
                        this.props.applicantData[this.props.domainName][this.props.data].status ? 
                        (<Button onClick={this.handleUndo(this.props.applicantData[this.props.domainName][this.props.data])} disabled={this.props.ongoing ? this.props.ongoing[this.props.applicantData[this.props.domainName][this.props.data].applicantID] ? true : false : false}>Undo</Button>) : 
                        this.props.applicantData[this.props.domainName][this.props.data].ongoing ? 
                        (<Button onClick={this.handleUndo(this.props.applicantData[this.props.domainName][this.props.data])} disabled={this.props.ongoing ? this.props.ongoing[this.props.applicantData[this.props.domainName][this.props.data].applicantID] ? true : false : false}>Undo</Button>) : 
                        (<Button onClick={this.handleSelect(this.props.applicantData[this.props.domainName][this.props.data])} disabled={this.props.ongoing ? this.props.ongoing[this.props.applicantData[this.props.domainName][this.props.data].applicantID] ? true : false : false}>Select</Button>)
                    }
                    
                </td>
            </tr>
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
)(DisplayGreenRow);
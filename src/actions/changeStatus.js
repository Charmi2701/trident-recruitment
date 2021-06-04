export const markDone = (changeData) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firebase = getFirebase();
        const database = firebase.database();
        //console.log(changeData);
        database.ref("applicantData/"+changeData.domain+"/"+changeData.applicantID+"/status").set(true).then(() => {
            //console.log('Status changed to Done')
            dispatch({type: 'CHANGE_STATUS_DONE', changeData});
        }).catch((error) => {
            dispatch({type:'CHANGE_STATUS_DONE_ERROR', error});
        });

        database.ref("ongoing/"+changeData.applicantID).remove();
        
    }
};

export const markSelect = (changeData) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firebase = getFirebase();
        const database = firebase.database();
        //console.log(changeData);
        database.ref("applicantData/"+changeData.domain+"/"+changeData.applicantID+"/ongoing").set(true).then(() => {
            //console.log('Status changed to Ongoing')
            dispatch({type: 'CHANGE_STATUS_ONGOING', changeData});
        }).catch((error) => {
            dispatch({type:'CHANGE_STATUS_ONGOING_ERROR', error});
        });

        database.ref("ongoing/"+changeData.applicantID).set("Ongoing").then(() => {
            //console.log("Booked");
            dispatch({type:'BOOKED', changeData});
        }).catch((error) => {
            dispatch({type:'BOOKED_ERROR',error});
        })
        
    }
};

export const markOriginal = (changeData) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firebase = getFirebase();
        const database = firebase.database();
        //console.log(changeData);
        database.ref("applicantData/"+changeData.domain+"/"+changeData.applicantID+"/ongoing").set(false).then(() => {
            database.ref("applicantData/"+changeData.domain+"/"+changeData.applicantID+"/status").set(false).then(() => {
                //console.log('Status changed to Not Done')
                dispatch({type: 'CHANGE_STATUS_ORIGINAL', changeData});
            })
        }).catch((error) => {
            dispatch({type:'CHANGE_STATUS_ORGINAL_ERROR', error});
        });

        database.ref("ongoing/"+changeData.applicantID).remove();
        
    }
};
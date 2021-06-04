export const addData = (newData) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firebase = getFirebase();
        const database = firebase.database();
        var data = {
            applicantID: String(newData.applicantID),
            applicantName: newData.applicantName,
            fDomainName: newData.fDomainName,
            status: false,
            ongoing: false
        }
        console.log(newData);
        database.ref("applicantData/"+newData.domain+"/"+newData.applicantID).set(data).then(() => {
            //console.log('UPLOADED DATA')
            dispatch({type: 'UPLOAD_DATA_SET', newData});
        }).catch((error) => {
            dispatch({type:'UPLOAD_DATA_SET_ERROR', error});
        });
        
    }
};
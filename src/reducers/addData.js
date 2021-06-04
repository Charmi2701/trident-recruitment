const initState = {
    applicantData: [
        {
            'AUV': {
                0: {
                    applicantID: String(0),
                    applicantName: 'Test Student 1',
                    domain: 'AUV',
                }
            }
        },
    ]
}

const addDataReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPLOAD_DATA_SET':
            //console.log('Uploaded data Set', action.uploadData)
            return state;
        case 'UPLOAD_DATA_SET_ERROR':
            //console.log('uploading data set error', action.error);
            return state;
        default:
            return state;
    }
}

export default addDataReducer;
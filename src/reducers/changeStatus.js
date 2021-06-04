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

const changeStatusReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_STATUS_DONE':
            //console.log('Status changes successfully', action.changeData)
            return state;
        case 'CHANGE_STATUS_DONE_ERROR':
            //console.log('Status changing error', action.error);
            return state;
        case 'CHANGE_STATUS_ORIGINAL':
            //console.log('Status changes successfully', action.changeData)
            return state;
        case 'CHANGE_STATUS_ORIGINAL_ERROR':
            //console.log('Status changing error', action.error);
            return state;
            case 'CHANGE_STATUS_ONGOING':
            //console.log('Status changes successfully', action.changeData)
            return state;
        case 'CHANGE_STATUS_ONGOING_ERROR':
            //console.log('Status changing error', action.error);
            return state;
        default:
            return state;
    }
}

export default changeStatusReducer;
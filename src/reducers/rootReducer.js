import authReducer from './authReducer'
import addDataReducer from './addData'
import changeStatusReducer from './changeStatus'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    addData: addDataReducer,
    changeStatus: changeStatusReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
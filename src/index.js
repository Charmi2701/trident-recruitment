import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers/rootReducer'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider, useSelector} from 'react-redux'
import thunk from 'redux-thunk'
import {createFirestoreInstance, reduxFirestore, getFirestore} from 'redux-firestore'
import {ReactReduxFirebaseProvider, getFirebase, isLoaded} from 'react-redux-firebase'
import fbConfig from './config/fb_config'
import firebase from 'firebase/app'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    //reactReduxFirebase(fbConfig, rrConfig)
    
  )
);

const rrConfig = {
  useFirestoreForProfile: true,
  userProfile: 'users',
}

const rrfProps = {
  firebase,
  config: rrConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: 'presence',
  sessions: 'sessions',
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);


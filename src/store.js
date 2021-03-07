import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { createStore, combineReducers, compose } from 'redux';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';

// Reducers
// @todo

const firebaseConfig = {
  apiKey: "AIzaSyCueU801B1i3Q6BWWAQ-KoKbe_lPNQnIo4",
  authDomain: "reactclientpanel-7330f.firebaseapp.com",
  projectId: "reactclientpanel-7330f",
  storageBucket: "reactclientpanel-7330f.appspot.com",
  messagingSenderId: "1090007050266",
  appId: "1:1090007050266:web:997253a2bc8a8cb4af09a3"
};

//react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

//Init firebase instance
firebase.initializeApp(firebaseConfig);

//Init firestore
const firestore = firebase.firestore();

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create initial state
const initialState = {};

// Create store with reducers
const store = createStore(
  rootReducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

// Export props to be imported in App.js ReactReduxFirebaseProvider
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

export default store; 

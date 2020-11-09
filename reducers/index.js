import { combineReducers } from 'redux';
import fetchDataReducer from './fetchDataReducer.js';

const rootReducer = combineReducers({
    fetchDataReducer : fetchDataReducer,
})

export default rootReducer;
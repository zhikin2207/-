import {combineReducers} from 'redux';
import typing from './typing-reducer';
import statistics from './statistics-reducer';

const rootReducer = combineReducers({
    typing,
    statistics
});

export default rootReducer;

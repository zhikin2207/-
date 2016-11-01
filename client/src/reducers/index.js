import {combineReducers} from 'redux';
import typing from './typing-reducer';
import statistics from './statistics-reducer';
import auth from './auth-reducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    form,
    typing,
    statistics,
    auth
});

export default rootReducer;

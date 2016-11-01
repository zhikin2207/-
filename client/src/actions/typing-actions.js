import * as types from './action-types';
import {get} from 'jquery';
import {url,statusCode} from '../config';
import * as typingSelectors from '../utils/selectors/typing-selectors';
import textService from '../api/text-service';

export const setInput = (text) => ({ 
    type: types.SET_INPUT,
    text 
});

export const setCorrectInput = (text) => ({
    type: types.SET_CORRECT_INPUT,
    time: new Date().getTime(),
    text
});

export const setErrorInput = (text) => ({
    type: types.SET_ERROR_INPUT,
    text
});

export const setError = (error, index) => ({
    type: types.SET_ERROR,
    error,
    index
});

export const clearError = () => ({
    type: types.CLEAR_ERROR
});

export const resetTyping = () => ({ 
    type: types.RESET_TYPING 
});

export const loadTextSuccess = (text, name) => ({
    type: types.SET_INITIAL_TEXT,
    letters: typingSelectors.selectLettersStats(text),
    text,
    name
});

export const loadTopWords = () => {
    return dispatch => {
        dispatch(resetTyping());

        textService
            .topWords()
            .then(function(response) {
                dispatch(loadTextSuccess(response.data.value, response.data.name));
            })
            .catch(function(error) {
                // TODO: solve this issue
            });
    };
};

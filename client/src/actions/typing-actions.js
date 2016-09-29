import * as types from './action-types';
import words from '../store/words';

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

const loadTextSuccess = (text) => ({
    type: types.SET_INITIAL_TEXT,
    text 
});

export const loadText = () => {
    return dispatch => {
        const text = words[randomInteger(0, words.length -1)];

        dispatch(resetTyping());
        dispatch(loadTextSuccess(text));
    };
};

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
}

import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function(state = initialState.typing, action) {
    switch(action.type) {
        case types.SET_INITIAL_TEXT:
            return setInitialText(initialState.typing, action.text);
        case types.SET_CORRECT_INPUT:
        case types.SET_ERROR_INPUT:
        case types.SET_INPUT:
            return setInput(state, action.text);
        case types.SET_ERROR:
            return  setError(state, action.index);
        case types.CLEAR_ERROR:
            return clearError(state);
        case types.RESET_TYPING:
            return initialState.typing;
    }

    return state;
}

const setError = (state, index) => {
    if (state.errorIndex === index) return state;

    return {
        ...state,
        errorIndex: index,
        fixes: [...state.fixes, index]
    };
};

const clearError = (state) => {
    return {
        ...state,
        errorIndex: -1
    };
};

const setInput = (state, text) => {
    return {
        ...state,
        inputText: text,
        cursorIndex: text.length
    };
};

const setInitialText = (state, text) => {
    return {
        ...state,
        initialText: text
    };
};

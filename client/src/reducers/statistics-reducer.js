import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function(state = initialState.statistics, action) {
    switch(action.type) {
        case types.SET_INITIAL_TEXT:
            return setLetters(state, action.letters);
        case types.SET_ELAPSED_TICKS:
            return setElapsedTicks(state, action.elapsedTicks);
        case types.SET_CORRECT_INPUT:
            return updateLetter(state, action.text, action.time);
        case types.SET_ERROR:
            return setError(state, action.error, action.index);
        case types.RESET_STATISTICS:
            return initialState.statistics;
    }

    return state;
}

const setLetters = (state, letters) => {
    return {
        ...state,
        letters: letters
    };
};

const setElapsedTicks = (state, ticks) => {
    return {
        ...state,
        elapsedTicks: ticks
    };
};

const updateLetter = (state, inputText, time) => {
    const letters = [...state.letters];
    const letterIndex = inputText.length - 1;

    letters[letterIndex] = {
        ...letters[letterIndex],
        time: time
    };

    return {
        ...state,
        letters: letters
    };
};

const setError = (state, error, letterIndex) => {
    const letters = [...state.letters];

    letters[letterIndex] = {
        ...letters[letterIndex],
        errors: [
            ...letters[letterIndex].errors,
            error
        ]
    };

    return {
        ...state,
        letters: letters
    };
};

import * as types from './action-types';

export const setLetters = (letters) => ({
    type: types.SET_LETTERS, letters
});

export const setElapsedTicks = (elapsedTicks) => ({
    type: types.SET_ELAPSED_TICKS, elapsedTicks
});

export const reset = () => ({
    type: types.RESET_STATISTICS
});

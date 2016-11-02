import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function(state = initialState.auth, action) {
    switch(action.type) {
        case types.SIGNIN_USER:
            return {...state, authenticated: true };
        case types.CLEAR_AUTH_ERROR:
            return {...state, signinError: '', signupError: '' };
        case types.SIGNOUT_USER:
            return {...state, authenticated: false};
        case types.SET_SIGNUP_ERROR:
            return {...state, signupError: action.payload};
        case types.SET_SIGNIN_ERROR:
            return {...state, signinError: action.payload};
        case types.SET_USER_INFO:
            return {...state, user: action.user};
    }

    return state;
}

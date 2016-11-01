import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function(state = initialState.auth, action) {
    switch(action.type) {
        case types.SIGNIN_USER:
            return {...state, authenticated: true, payload: ''};
        case types.CLEAR_AUTH_ERROR:
            return {...state, payload: '' };
        case types.SIGNOUT_USER:
            return {...state, authenticated: false};
        case types.SET_AUTH_ERROR:
            return {...state, payload: action.payload};
        case types.SET_USER_INFO:
            return {...state, user: action.user};
    }

    return state;
}

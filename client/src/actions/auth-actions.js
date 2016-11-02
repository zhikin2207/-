import {browserHistory} from 'react-router';
import * as types from './action-types';
import {urls, constants} from '../config';
import userService from '../api/user-service';

export const signinUserSuccess = () => ({ 
    type: types.SIGNIN_USER
});

export const signoutUserSuccess = () => ({
    type: types.SIGNOUT_USER 
});

export const setSigninError = (payload) => ({
    type: types.SET_SIGNIN_ERROR,
    payload
});

export const setSignupError = (payload) => ({
    type: types.SET_SIGNUP_ERROR,
    payload
});

export const clearAuthError = () => ({
    type: types.CLEAR_AUTH_ERROR
});

export const setUserInfo = (user) => ({
    type: types.SET_USER_INFO,
    user
});

export const signinUser = (user) => {
    return dispatch => {
        userService
            .signin(user)
            .then(function(response) {
                localStorage.setItem(constants.tokenKey, response.data);
                dispatch(signinUserSuccess());

                return userService.getProfile();
            })
            .then(function(response) {
                localStorage.setItem(constants.userKey, JSON.stringify(response.data));
                dispatch(setUserInfo(response.data));
                browserHistory.push(urls.defaultRedirect);
            })
            .catch(function(error) {
                const message = error.message || 'Ops! Seems like something went wrong.';
                dispatch(setSigninError(message));
            });
    };
};

export const signoutUser = () => {
    return dispatch => {
        localStorage.removeItem(constants.tokenKey);
        localStorage.removeItem(constants.userKey);
        dispatch(signoutUserSuccess());
    };
};

export const signupUser = (user) => {
    return dispatch => {
        userService.signup(user)
            .then(function(response) {
                localStorage.setItem(constants.tokenKey, response.data);
                dispatch(signinUserSuccess());

                return userService.getProfile();
            })
            .then(function(response) {
                localStorage.setItem(constants.userKey, JSON.stringify(response.data));
                dispatch(setUserInfo(response.data));
                browserHistory.push(urls.defaultRedirect);
            })
            .catch(function(error) {
                const message = error.message || 'Ops! Seems like something went wrong.';
                dispatch(setSignupError(message));
            });
    };
};


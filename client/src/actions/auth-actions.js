import {post} from 'jquery';
import {browserHistory} from 'react-router';
import * as types from './action-types';
import {url,statusCode,constant} from '../config';
import userService from '../api/user-service';

export const signinUserSuccess = () => ({ 
    type: types.SIGNIN_USER
});

export const signoutUserSuccess = () => ({
    type: types.SIGNOUT_USER 
});

export const setAuthError = (payload) => ({
    type: types.SET_AUTH_ERROR,
    payload
});

export const clearAuthError = () => ({
    type: types.CLEAR_AUTH_ERROR
});

export const setUserInfo = (user) => ({
    type: types.SET_USER_INFO,
    user
})

export const signinUser = (user) => {
    return dispatch => {
        userService
            .signin(user)
            .then(function(response) {
                localStorage.setItem(constant.tokenName, response.data);
                dispatch(signinUserSuccess());

                return userService.getProfile();
            })
            .then(function(response) {
                localStorage.setItem('user', JSON.stringify(response.data));
                dispatch(setUserInfo(response.data));
            })
            .then(function() {
                browserHistory.push('/');
            })
            .catch(function(error) {
                const message = error.message || 'Ops! Seems like something went wrong.';
                dispatch(setAuthError(message));
            });
    };
};

export const signoutUser = () => {
    return dispatch => {
        localStorage.removeItem(constant.tokenName);
        localStorage.removeItem('user');
        dispatch(signoutUserSuccess());
    };
};

export const signupUser = (user) => {
    return dispatch => {
        userService.signup(user)
            .then(function(response) {
                localStorage.setItem(constant.tokenName, response.data);
                dispatch(signinUserSuccess());

                return userService.getProfile();
            })
            .then(function(response) {
                localStorage.setItem('user', JSON.stringify(response.data));
                dispatch(setUserInfo(response.data));
            })
            .then(function() {
                browserHistory.push('/');
            })
            .catch(function(error) {
                const message = error.message || 'Ops! Seems like something went wrong.';
                dispatch(setAuthError(message));
            });
    };
}

// TODO: make different auth errors

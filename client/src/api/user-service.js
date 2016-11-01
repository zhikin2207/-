import {url} from '../config';
import apiService from './api-service';
import defaultConfig from './config';

class UserService {
    signin(user) {
        return apiService.ajaxCall({
            ...defaultConfig,
            url: url.token,
            data: user
        });
    }

    signup(user) {
        return apiService.ajaxCall({
            ...defaultConfig,
            url: url.account,
            data: user
        });
    }

    getProfile() {
        return apiService.ajaxCall({
            ...defaultConfig,
            url: url.base + '/account',
            method: 'GET'
        });
    }
}

export default new UserService;
